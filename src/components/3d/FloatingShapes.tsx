import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  distort?: number;
  shape?: "sphere" | "icosahedron" | "octahedron" | "torus" | "box";
}

const FloatingShape = ({ 
  position, 
  scale, 
  color, 
  speed = 1, 
  distort = 0.3,
  shape = "icosahedron" 
}: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[1]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

interface ParticlesProps {
  count?: number;
}

const Particles = ({ count = 100 }: ParticlesProps) => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#dc2626"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

interface FloatingShapesProps {
  variant?: "hero" | "about" | "skills" | "projects" | "contact";
  className?: string;
}

const FloatingShapes = ({ variant = "hero", className = "" }: FloatingShapesProps) => {
  const shapes = useMemo(() => {
    switch (variant) {
      case "hero":
        return [
          { position: [-3, 2, -2] as [number, number, number], scale: 0.8, color: "#dc2626", shape: "icosahedron" as const },
          { position: [3, -1, -3] as [number, number, number], scale: 0.6, color: "#f97316", shape: "octahedron" as const },
          { position: [0, 3, -4] as [number, number, number], scale: 0.4, color: "#dc2626", shape: "sphere" as const },
          { position: [-2, -2, -2] as [number, number, number], scale: 0.5, color: "#f97316", shape: "torus" as const },
        ];
      case "about":
        return [
          { position: [4, 1, -3] as [number, number, number], scale: 0.7, color: "#dc2626", shape: "sphere" as const },
          { position: [-3, -2, -2] as [number, number, number], scale: 0.5, color: "#f97316", shape: "icosahedron" as const },
        ];
      case "skills":
        return [
          { position: [-4, 2, -3] as [number, number, number], scale: 0.6, color: "#dc2626", shape: "octahedron" as const },
          { position: [4, -1, -2] as [number, number, number], scale: 0.4, color: "#f97316", shape: "box" as const },
          { position: [0, 2, -4] as [number, number, number], scale: 0.5, color: "#dc2626", shape: "torus" as const },
        ];
      case "projects":
        return [
          { position: [3, 2, -3] as [number, number, number], scale: 0.8, color: "#dc2626", shape: "icosahedron" as const },
          { position: [-4, -1, -2] as [number, number, number], scale: 0.5, color: "#f97316", shape: "sphere" as const },
        ];
      case "contact":
        return [
          { position: [-3, 1, -2] as [number, number, number], scale: 0.6, color: "#dc2626", shape: "torus" as const },
          { position: [3, -2, -3] as [number, number, number], scale: 0.7, color: "#f97316", shape: "icosahedron" as const },
        ];
      default:
        return [];
    }
  }, [variant]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#dc2626" />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            scale={shape.scale}
            color={shape.color}
            shape={shape.shape}
            speed={0.5 + index * 0.2}
            distort={0.2 + index * 0.1}
          />
        ))}
        
        <Particles count={variant === "hero" ? 150 : 80} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;

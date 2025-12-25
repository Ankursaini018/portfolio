import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.08;
    
    // Mouse interaction
    const mouseX = (state.mouse.x * 0.5);
    const mouseY = (state.mouse.y * 0.5);
    ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(time * 0.3) * 3;
      orb1Ref.current.position.y = Math.cos(time * 0.4) * 2;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(time * 0.2) * 4;
      orb2Ref.current.position.y = Math.sin(time * 0.3) * 2.5;
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(time * 0.4) * 2;
      orb3Ref.current.position.y = Math.cos(time * 0.5) * 3;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[2, 1, -3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </mesh>
      <mesh ref={orb2Ref} position={[-3, -1, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orb3Ref} position={[0, 2, -4]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.12} />
      </mesh>
    </>
  );
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={2000} />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ParticleField;

import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/profile-cutout.png";
import stripBlue from "@/assets/hero-strip-blue.jpg";
import stripOrange from "@/assets/hero-strip-orange.jpg";
import stripCyan from "@/assets/hero-strip-cyan.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  const sceneRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!motionAllowed || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sceneRef.current?.style.setProperty("--pointer-x", x.toFixed(3));
    sceneRef.current?.style.setProperty("--pointer-y", y.toFixed(3));
  };

  const onPointerLeave = () => {
    sceneRef.current?.style.setProperty("--pointer-x", "0");
    sceneRef.current?.style.setProperty("--pointer-y", "0");
  };

  const scenes = [
    { label: "Machine learning", short: "ML", tone: "blue", img: stripBlue },
    { label: "Data science", short: "DS", tone: "orange", img: stripOrange },
    { label: "AI engineering", short: "AI", tone: "cyan", img: stripCyan },
  ];

  return (
    <section ref={sceneRef} className={`diroz-hero scene-${active}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} aria-label="Ankur Saini introduction">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-intro">
          <span className="hero-kicker">Independent AI / ML engineer</span>
          <p>BUILDING IDEAS<br />INTO INTELLIGENCE.</p>
        </div>
        <div className="hero-discipline" aria-label="Expertise">
          <span>Machine Learning <ArrowDownRight /></span>
          <span>Data Science <ArrowDownRight /></span>
          <span>AI Development <ArrowDownRight /></span>
        </div>
      </div>
      <div className="hero-portrait-layer" aria-hidden="true"><img src={portrait} alt="" /></div>
      <div className="hero-bottom">
        <div className="hero-meta"><span className="hero-status-dot" /> PILANI, INDIA <span className="hero-meta-divider">—</span> OPEN TO WORK</div>
        <h1>ANKUR <span>SAINI</span></h1>
        <div className="hero-bottom-row">
          <Button variant="ghost" onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight /></Button>
          <div className="hero-scenes" aria-label="Choose visual scene">
            {scenes.map((scene, index) => <Button key={scene.short} variant="ghost" aria-label={`Show ${scene.label} scene`} aria-pressed={active === index} onClick={() => setActive(index)} className={`hero-scene scene-tone-${scene.tone} ${active === index ? "is-active" : ""}`}><img src={scene.img} alt="" /></Button>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

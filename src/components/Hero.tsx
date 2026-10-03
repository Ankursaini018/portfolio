import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portraitGreenCutout from "@/assets/hero-green-cutout.png";
import portraitNavyCutout from "@/assets/hero-navy-cutout.png";
import portraitBrownCutout from "@/assets/hero-brown-cutout.png";
import portraitGreen from "@/assets/hero-portrait-green.png.asset.json";
import portraitNavy from "@/assets/hero-portrait-navy.png.asset.json";
import portraitBrown from "@/assets/hero-portrait-brown.png.asset.json";
import { Button } from "./ui/button";

const Hero = () => {
  const sceneRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionAllowed || paused) return;
    const timer = window.setTimeout(() => {
      if (!document.hidden) setActive((current) => (current + 1) % 3);
    }, 3800);
    return () => window.clearTimeout(timer);
  }, [active, motionAllowed, paused]);

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
    { label: "green suit portrait", img: portraitGreen.url, cutout: portraitGreenCutout },
    { label: "navy suit portrait", img: portraitNavy.url, cutout: portraitNavyCutout },
    { label: "brown suit portrait", img: portraitBrown.url, cutout: portraitBrownCutout },
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
      <div className="hero-portrait-layer" aria-hidden="true"><img key={active} src={scenes[active].cutout} alt="" /></div>
      <div className="hero-bottom">
        <div className="hero-meta"><span className="hero-status-dot" /> PILANI, INDIA <span className="hero-meta-divider">—</span> OPEN TO WORK</div>
        <h1>ANKUR <span>SAINI</span></h1>
        <div className="hero-bottom-row">
          <Button variant="ghost" onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight /></Button>
          <div className="hero-scenes" aria-label="Choose visual scene" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
            {scenes.map((scene, index) => <Button key={scene.label} variant="ghost" aria-label={`Show ${scene.label}`} aria-pressed={active === index} onClick={() => setActive(index)} className={`hero-scene ${active === index ? "is-active" : ""}`}><img src={scene.img} alt={scene.label} onError={(event) => { if (window.location.hostname === "localhost" && event.currentTarget.src !== `https://ankursaini.lovable.app${scene.img}`) event.currentTarget.src = `https://ankursaini.lovable.app${scene.img}`; }} /></Button>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

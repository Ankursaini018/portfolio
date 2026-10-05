import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Button } from "./ui/button";
import { scrollPortfolioTo, setPortfolioScroller } from "@/lib/portfolioScroll";

gsap.registerPlugin(ScrollTrigger);

const contentSelectors: Record<string, string> = {
  about: ".about-statement, .about-photo, .about-details > .section-index, .about-details h2, .about-details > p, .about-highlights > div",
  skills: ".skill-row",
  experience: ".experience-meta, .experience-body > .section-index, .experience-body h3, .experience-company, .experience-body li",
  projects: ".project-row",
  education: ".education-degree, .education-courses > .section-index, .course-row",
  contact: ".contact-lede, .contact-layout > div",
};

const PortfolioMotion = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let cleanup = () => {};

    const initialize = () => {
      cleanup();
      const reduced = reduceQuery.matches;
      const fine = fineQuery.matches;
      const compact = window.innerWidth <= 767;
      let lenis: Lenis | null = null;
      let frame = 0;
      if (!reduced && fine) {
        lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false, autoRaf: false });
        setPortfolioScroller(lenis);
        const animateFrame = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(animateFrame);
        };
        frame = requestAnimationFrame(animateFrame);
      } else setPortfolioScroller(null);

      const onScroll = () => setShowTop(window.scrollY > 600);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      const context = gsap.context(() => {
        if (!reduced) {
          const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
          entrance
            .from(".diroz-nav", { autoAlpha: 0, y: -18, duration: .6 }, .08)
            .from(".hero-kicker", { autoAlpha: 0, y: 18, duration: .7 }, .3)
            .from(".hero-intro .hero-line", { autoAlpha: 0, yPercent: 110, stagger: .12, duration: 1.05 }, .48)
            .from(".hero-discipline span", { autoAlpha: 0, y: 18, stagger: .1, duration: .65 }, .85)
            .from(".hero-meta", { autoAlpha: 0, y: 15, duration: .6 }, 1.02)
            .from(".hero-bottom h1 .hero-name-word", { autoAlpha: 0, yPercent: 110, stagger: .12, duration: 1.15 }, 1.1)
            .from(".hero-scroll", { autoAlpha: 0, y: 13, duration: .6 }, 1.45)
            .from(".hero-scenes", { autoAlpha: 0, x: 18, duration: .85 }, 1.55)
            .from(".hero-portrait-layer", { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", duration: 1.2, clearProps: "opacity,visibility,clipPath" }, 1.67);

          Object.entries(contentSelectors).forEach(([id, selector]) => {
            const section = document.getElementById(id);
            if (!section) return;
            const label = section.querySelector(".section-heading");
            const heading = section.querySelector<HTMLElement>(".section-display");
            const content = gsap.utils.toArray<HTMLElement>(section.querySelectorAll(selector));
            const timeline = gsap.timeline({
              scrollTrigger: { trigger: section, start: "top 86%", once: true },
              defaults: { ease: "power3.out" },
            });
            if (label) timeline.from(label, { autoAlpha: 0, y: 18, duration: .65, clearProps: "all" });
            if (heading) timeline.from(heading, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", y: compact ? 28 : 55, duration: 1.05, clearProps: "all" }, "-=.25");
            if (content.length) timeline.from(content, {
              autoAlpha: 0, y: compact ? 20 : 38, stagger: compact ? .065 : .11,
              duration: .8, clearProps: "all",
            }, "-=.28");
          });

          const footer = document.querySelector(".diroz-footer");
          if (footer) {
            const timeline = gsap.timeline({ scrollTrigger: { trigger: footer, start: "top 85%", once: true }, defaults: { ease: "power3.out" } });
            timeline.from(".footer-top > *", { autoAlpha: 0, y: 20, stagger: .1, duration: .7, clearProps: "all" })
              .from(".diroz-footer h2", { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", y: compact ? 28 : 55, duration: 1.1, clearProps: "all" }, "-=.25")
              .from(".footer-email", { autoAlpha: 0, y: 20, duration: .65, clearProps: "all" }, "-=.35");
          }

          if (fine && !compact) {
            gsap.to(".about-photo img", {
              y: 25, ease: "none", scrollTrigger: { trigger: ".about-photo", start: "top bottom", end: "bottom top", scrub: true },
            });
          }
        }

        if (progressRef.current) {
          gsap.set(progressRef.current, { scaleX: 0 });
          ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => gsap.set(progressRef.current, { scaleX: self.progress }) });
        }
      });

      const listeners: Array<() => void> = [];
      if (!reduced && fine && window.innerWidth >= 1024 && cursorRef.current) {
        const cursor = cursorRef.current;
        const moveX = gsap.quickTo(cursor, "x", { duration: .28, ease: "power3.out" });
        const moveY = gsap.quickTo(cursor, "y", { duration: .28, ease: "power3.out" });
        for (const row of document.querySelectorAll<HTMLElement>(".project-row")) {
          const enter = () => cursor.classList.add("is-visible");
          const leave = () => cursor.classList.remove("is-visible");
          const move = (event: PointerEvent) => { moveX(event.clientX); moveY(event.clientY); };
          row.addEventListener("pointerenter", enter);
          row.addEventListener("pointerleave", leave);
          row.addEventListener("pointermove", move);
          listeners.push(() => { row.removeEventListener("pointerenter", enter); row.removeEventListener("pointerleave", leave); row.removeEventListener("pointermove", move); });
        }
      }

      ScrollTrigger.refresh();
      cleanup = () => {
        listeners.forEach(remove => remove());
        window.removeEventListener("scroll", onScroll);
        context.revert();
        cancelAnimationFrame(frame);
        lenis?.destroy();
        setPortfolioScroller(null);
      };
    };

    initialize();
    reduceQuery.addEventListener("change", initialize);
    fineQuery.addEventListener("change", initialize);
    return () => {
      reduceQuery.removeEventListener("change", initialize);
      fineQuery.removeEventListener("change", initialize);
      cleanup();
    };
  }, []);

  return <>
    <div ref={progressRef} className="portfolio-progress" aria-hidden="true" />
    <div ref={cursorRef} className="project-cursor" aria-hidden="true">VIEW</div>
    <Button variant="ghost" size="icon" aria-label="Back to top" title="Back to top" onClick={() => scrollPortfolioTo(0)} className={`portfolio-back-top ${showTop ? "is-visible" : ""}`} tabIndex={showTop ? 0 : -1}><ArrowUp /></Button>
  </>;
};

export default PortfolioMotion;
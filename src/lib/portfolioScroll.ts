import type Lenis from "lenis";

let activeLenis: Lenis | null = null;

export const setPortfolioScroller = (instance: Lenis | null) => {
  activeLenis = instance;
};

export const scrollPortfolioTo = (target: string | number) => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (activeLenis && !reduced) {
    activeLenis.scrollTo(target, { offset: typeof target === "string" ? -68 : 0, duration: 1.15 });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: reduced ? "instant" : "smooth" });
  else document.querySelector(target)?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
};
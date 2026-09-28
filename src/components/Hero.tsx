import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profile-picture.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  const goToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-6 pb-20 pt-28 md:px-10 lg:px-16 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className={`mb-8 flex items-center gap-3 ${isLoaded ? "animate-fade-slide-up" : "opacity-0"}`}>
            <span className="h-px w-8 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">AI / ML Engineer & Data Scientist</span>
          </div>
          <div className="overflow-hidden">
            <h1 className={`font-display text-[4.8rem] leading-[0.82] text-foreground sm:text-8xl md:text-[9.5rem] ${isLoaded ? "animate-clip-reveal-up" : "opacity-0"}`}>
              Building
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className={`font-display text-[4.8rem] italic leading-[0.82] text-muted-foreground sm:text-8xl md:text-[9.5rem] ${isLoaded ? "animate-clip-reveal-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
              intelligent
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className={`font-display text-[4.8rem] leading-[0.82] text-foreground sm:text-8xl md:text-[9.5rem] ${isLoaded ? "animate-clip-reveal-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              systems.
            </h1>
          </div>

          <div className={`mt-10 max-w-xl ${isLoaded ? "animate-fade-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.65s" }}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I’m Ankur Saini, turning machine learning, data, and thoughtful engineering into useful digital products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button onClick={goToProjects} className="h-12 rounded-full px-6 text-xs font-semibold uppercase tracking-widest">
                View my work <ArrowDown className="ml-1" />
              </Button>
              <div className="flex items-center gap-4">
                <a href="mailto:officialankur0707@gmail.com" aria-label="Email" className="social-icon"><Mail /></a>
                <a href="https://github.com/Ankursaini018" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><Github /></a>
                <a href="https://linkedin.com/in/ankur-saini-596173374" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin /></a>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative lg:col-span-5 ${isLoaded ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.35s" }}>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <img src={profilePicture} alt="Ankur Saini" className="h-full w-full object-cover object-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/80 to-transparent p-6 pt-24 text-background">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">Pilani, India</p>
              <p className="font-display text-3xl italic">Hello.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-primary text-center text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-elegant md:-right-6 md:h-28 md:w-28">
            Open to<br />work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

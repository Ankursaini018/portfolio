import { Github, Linkedin, Mail, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import ParticleField from "./ParticleField";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_hsl(220_100%_65%_/_0.08)_0%,_transparent_50%)] pointer-events-none z-[1]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        <div className="animate-slide-up animation-delay-100">
          <p className="text-primary font-mono text-sm md:text-base mb-6 tracking-widest uppercase">
            Hello, I'm
          </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-slide-up animation-delay-200 tracking-tight">
          <span className="text-foreground">Ankur </span>
          <span className="text-gradient">Saini</span>
        </h1>
        
        <div className="animate-slide-up animation-delay-300">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            AI/ML Engineer & Data Science Enthusiast
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground/70 mb-10">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Pilani, Rajasthan, India</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-medium glow-primary hover:opacity-90 transition-all duration-300 group px-8"
            asChild
          >
            <a href="mailto:sainanku018@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 text-foreground hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Ankursaini018" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 text-foreground hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
            asChild
          >
            <a href="https://linkedin.com/in/ankur-saini-596173374" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors animate-slide-up animation-delay-500"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 animate-bounce-subtle" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

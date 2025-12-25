import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-noise">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-stroke text-massive font-light tracking-tighter whitespace-nowrap animate-fade-in">
          Ankur Saini
        </h1>
      </div>

      {/* Top Left Corner */}
      <div className="absolute top-6 left-6 z-20">
        <p className="font-mono-alt text-xs text-muted-foreground animate-slide-up">
          [status: <span className="text-foreground">active</span>]
        </p>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-6 right-6 z-20">
        <p className="font-mono-alt text-xs text-muted-foreground animate-slide-up animation-delay-100">
          MENU [+]
        </p>
      </div>

      {/* Bottom Left - Coordinates */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="font-mono-alt text-xs text-muted-foreground space-y-1 animate-slide-up animation-delay-300">
          <p>[X].0px</p>
          <p>[Y].0px</p>
        </div>
        <div className="mt-4 animate-slide-up animation-delay-400">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Portfolio</p>
          <div className="flex gap-2">
            <div className="w-8 h-px bg-foreground" />
            <div className="w-4 h-px bg-foreground/30" />
            <div className="w-2 h-px bg-foreground/20" />
          </div>
        </div>
      </div>

      {/* Main Content - Right Side */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl ml-auto mr-12 md:mr-24 lg:mr-32">
          <div className="animate-slide-up animation-delay-500">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-foreground" />
              <span className="font-mono-alt text-xs text-muted-foreground uppercase tracking-widest">
                AI/ML Engineer
              </span>
            </div>
          </div>

          <div className="animate-slide-up animation-delay-600">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-8">
              The creative process of<br />
              <span className="text-foreground">crafting intelligent solutions</span>
            </h2>
          </div>

          <div className="animate-slide-up animation-delay-700">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <MapPin className="w-3 h-3" />
              <span className="font-mono-alt text-xs">Pilani, Rajasthan, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 animate-slide-up animation-delay-800">
            <a 
              href="mailto:sainanku018@gmail.com"
              className="group flex items-center gap-2 text-sm link-hover"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <a 
              href="https://github.com/Ankursaini018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm link-hover"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/ankur-saini-596173374" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm link-hover"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Lines */}
      <div className="absolute bottom-32 right-6 w-80 animate-line-draw animation-delay-1000">
        <div className="line-horizontal" />
        <div className="line-horizontal mt-8" />
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-6 right-6 text-muted-foreground hover:text-foreground transition-colors animate-fade-in animation-delay-1200"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;

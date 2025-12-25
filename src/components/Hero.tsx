import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={profilePicture}
          alt="Ankur Saini"
          className={`w-full h-full object-cover object-center transition-all duration-[2s] ${
            isLoaded ? "scale-100 opacity-30" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20">
        {/* Top Bar */}
        <div className="pt-8 flex justify-between items-start">
          <div className={`overflow-hidden ${isLoaded ? "animate-fade-slide-up" : ""}`}>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
              Portfolio 2025
            </p>
          </div>
          <div className={`overflow-hidden ${isLoaded ? "animate-fade-slide-up delay-200" : ""}`}>
            <p className="text-sm text-muted-foreground">
              AI/ML Engineer
            </p>
          </div>
        </div>

        {/* Center - Massive Text */}
        <div className="flex-1 flex flex-col justify-center py-12">
          {/* Name reveal */}
          <div className="overflow-hidden mb-4">
            <h1 
              className={`font-display text-hero text-foreground leading-none ${
                isLoaded ? "animate-clip-reveal-up" : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              ANKUR
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 
              className={`font-display text-hero text-foreground leading-none ${
                isLoaded ? "animate-clip-reveal-up" : ""
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              SAINI
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
            <div className="overflow-hidden">
              <p 
                className={`text-xl md:text-2xl text-muted-foreground font-light ${
                  isLoaded ? "animate-fade-slide-up" : ""
                }`}
                style={{ animationDelay: "0.8s" }}
              >
                Crafting intelligent AI/ML solutions
              </p>
            </div>
            <div className="overflow-hidden">
              <p 
                className={`text-xl md:text-2xl text-foreground font-light ${
                  isLoaded ? "animate-fade-slide-up" : ""
                }`}
                style={{ animationDelay: "1s" }}
              >
                that push <span className="text-red">boundaries</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Social Links */}
          <div 
            className={`flex gap-8 ${isLoaded ? "animate-fade-slide-up" : ""}`}
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="mailto:sainanku018@gmail.com"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium link-underline">Email</span>
            </a>
            <a
              href="https://github.com/Ankursaini018"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium link-underline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ankur-saini-596173374"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium link-underline">LinkedIn</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollDown}
            className={`group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 ${
              isLoaded ? "animate-fade-slide-up" : ""
            }`}
            style={{ animationDelay: "1.4s" }}
          >
            <span className="text-sm uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent ${
          isLoaded ? "animate-line-draw" : ""
        }`}
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
};

export default Hero;
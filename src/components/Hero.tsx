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
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="relative z-10 flex flex-col justify-between px-6 md:px-12 lg:px-16 py-8 order-2 lg:order-1">
          {/* Top Bar */}
          <div className="flex justify-between items-start">
            <div className={`overflow-hidden ${isLoaded ? "animate-fade-slide-up" : ""}`}>
              <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
                Portfolio 2025
              </p>
            </div>
            <div className={`overflow-hidden lg:hidden ${isLoaded ? "animate-fade-slide-up delay-200" : ""}`}>
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
            <div className="mt-8 md:mt-12 flex flex-col gap-4">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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

        {/* Right Side - Profile Picture */}
        <div className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2 overflow-hidden group cursor-pointer">
          {/* Image */}
          <div 
            className={`absolute inset-0 ${isLoaded ? "image-reveal" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={profilePicture}
              alt="Ankur Saini"
              className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 ${
                isLoaded ? "scale-100" : "scale-110"
              }`}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent" />
          </div>

          {/* Floating text on image */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <p 
              className={`text-sm text-foreground/80 uppercase tracking-[0.3em] ${
                isLoaded ? "animate-fade-slide-up" : ""
              }`}
              style={{ animationDelay: "1.5s" }}
            >
              AI/ML Engineer
            </p>
          </div>

          {/* Decorative corner */}
          <div 
            className={`absolute top-8 right-8 w-16 h-16 border border-foreground/20 hidden lg:block ${
              isLoaded ? "animate-scale-in" : ""
            }`}
            style={{ animationDelay: "1.2s" }}
          />
        </div>
      </div>

      {/* Bottom Line */}
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
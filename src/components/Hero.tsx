import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden grid-pattern">
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Picture */}
        <div className="animate-slide-up mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse-glow" />
            <img 
              src={profilePicture} 
              alt="Ankur Saini" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>

        <div className="animate-slide-up animation-delay-100">
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
            {"<Hello World />"}
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up animation-delay-200">
          <span className="text-foreground">I'm </span>
          <span className="text-gradient">Ankur Saini</span>
        </h1>
        
        <div className="animate-slide-up animation-delay-300">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-outfit">
            AI/ML Engineer & Data Science Enthusiast
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Pilani, Rajasthan, India</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-400">
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-mono glow-primary hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="mailto:sainanku018@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 font-mono"
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
            className="border-primary/50 text-foreground hover:bg-primary/10 font-mono"
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
          className="animate-bounce text-primary hover:text-primary/80 transition-colors animate-slide-up animation-delay-500"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

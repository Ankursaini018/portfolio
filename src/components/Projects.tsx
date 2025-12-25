import { Brain, Sprout, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SkinScan AI",
      description: "AI-powered skin disease detection web application using deep learning. Utilizes convolutional neural networks to analyze skin images and provide accurate disease classification.",
      icon: Brain,
      tags: ["Deep Learning", "Python", "Flask", "CNN"],
    },
    {
      title: "Crop Recommendation System",
      description: "AI-based crop recommendation system that analyzes environmental data to suggest optimal crops for farmers. Considers factors like soil type, weather, and historical data.",
      icon: Sprout,
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">Featured Work</p>
          <h2 className="section-title scroll-animate">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="scroll-animate group glass rounded-xl overflow-hidden card-hover"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project header with gradient */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-[2] transition-transform duration-500" />
                  <project.icon className="relative w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary/80 rounded-lg text-xs text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

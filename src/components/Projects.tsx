import { Brain, Sprout, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SkinScan AI",
      description: "AI-powered skin disease detection web application using deep learning. Utilizes convolutional neural networks to analyze skin images and provide accurate disease classification.",
      icon: Brain,
      tags: ["Deep Learning", "Python", "Flask", "CNN"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Crop Recommendation System",
      description: "AI-based crop recommendation system that analyzes environmental data to suggest optimal crops for farmers. Considers factors like soil type, weather, and historical data.",
      icon: Sprout,
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Featured Work"}</p>
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
                <project.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted rounded text-xs text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-foreground hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-foreground hover:bg-primary/10"
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

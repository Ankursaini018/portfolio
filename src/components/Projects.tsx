import { Brain, Sprout, ExternalLink, Github, ArrowUpRight } from "lucide-react";
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
      number: "01",
      title: "SkinScan AI",
      description: "AI-powered skin disease detection web application using deep learning. Utilizes convolutional neural networks to analyze skin images and provide accurate disease classification.",
      tags: ["Deep Learning", "Python", "Flask", "CNN"],
    },
    {
      number: "02",
      title: "Crop Recommendation System",
      description: "AI-based crop recommendation system that analyzes environmental data to suggest optimal crops for farmers. Considers factors like soil type, weather, and historical data.",
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 3:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">projects</p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Featured Work</p>
          <h2 className="section-title scroll-animate">Projects</h2>
        </div>
        
        <div className="space-y-px">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="scroll-animate group border-t border-foreground/10 py-12 hover:bg-secondary/30 transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-mono-alt text-xs text-muted-foreground">{project.number}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="font-mono-alt text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-6 right-6">
        <div className="line-horizontal" />
      </div>
    </section>
  );
};

export default Projects;

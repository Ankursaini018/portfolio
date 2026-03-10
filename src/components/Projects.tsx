import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import Marquee from "./Marquee";

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
      number: "001",
      year: "2025",
      title: "AI Document Assistant",
      subtitle: "RAG System & AI",
      description: "An AI-powered document assistant built using Retrieval-Augmented Generation (RAG). Users can upload documents and ask questions in natural language. The system retrieves relevant document chunks using vector search and generates answers with source citations.",
      tags: ["Python", "RAG", "LLM", "Vector Search", "AI", "Machine Learning"],
      liveDemo: "https://ragsystem.lovable.app",
      github: "https://github.com/Ankursaini018/ragsystem.git",
    },
    {
      number: "002",
      year: "2025",
      title: "SkinScan AI",
      subtitle: "Deep Learning & Healthcare",
      description: "AI-powered skin disease detection web application that detects skin diseases from uploaded images using deep learning and computer vision.",
      tags: ["Deep Learning", "Python", "Flask", "CNN"],
      github: "https://github.com/Ankursaini018/Skin-disease.git",
    },
    {
      number: "003",
      year: "2025",
      title: "Crop Recommendation",
      subtitle: "ML & Agriculture",
      description: "Developed AI-based system for recommending optimal crops based on environmental data including soil type, weather conditions, and historical patterns.",
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
      github: "https://github.com/Ankursaini018/crop-prediction-system.git",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-30">
        <Marquee text="PROJECTS" speed="slow" direction="right" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-end justify-between mb-16 lg:mb-24">
          <div>
            <p className="text-sm text-muted-foreground mb-4 scroll-animate uppercase tracking-[0.3em]">
              04 — Works
            </p>
            <h2 className="font-display text-display-xl text-foreground scroll-animate">
              PROJECTS
            </h2>
          </div>
          <p className="text-sm text-muted-foreground scroll-animate uppercase tracking-widest">2025</p>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="scroll-animate group border border-border bg-card hover:border-red transition-all duration-500 hover-lift"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 p-8 lg:p-10">
                {/* Number & Year */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="text-red font-medium text-lg">{project.number}</span>
                  <span className="text-muted-foreground text-sm">{project.year}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground group-hover:text-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.subtitle}</p>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-muted-foreground border border-border px-3 py-1.5 hover:border-red hover:text-red transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.liveDemo || project.github) && (
                    <div className="flex gap-4 mt-6">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-red hover:text-foreground transition-colors border border-red px-4 py-2 hover:bg-red">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-2 hover:border-red">
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex items-center justify-end">
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-red group-hover:bg-red transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
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
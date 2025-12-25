import { ArrowUpRight } from "lucide-react";
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
      number: "001",
      year: "2024",
      title: "SkinScan AI",
      subtitle: "Deep Learning & Healthcare",
      description: "AI-powered skin disease detection web application that detects skin diseases from uploaded images using deep learning and computer vision.",
      tags: ["Deep Learning", "Python", "Flask", "CNN"],
    },
    {
      number: "002",
      year: "2024",
      title: "Loan Approval Prediction",
      subtitle: "ML & Finance",
      description: "Designed a machine learning model for predicting loan approvals. Analyzes applicant data to determine creditworthiness and loan eligibility.",
      tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
    },
    {
      number: "003",
      year: "2024",
      title: "HealthTech ML App",
      subtitle: "ML & Healthcare",
      description: "Created a health diagnosis tool with machine learning and Flask. Provides intelligent health assessments based on user-provided symptoms and data.",
      tags: ["Machine Learning", "Flask", "Python", "Healthcare"],
    },
    {
      number: "004",
      year: "2024",
      title: "Crop Recommendation",
      subtitle: "ML & Agriculture",
      description: "Developed AI-based system for recommending optimal crops based on environmental data including soil type, weather conditions, and historical patterns.",
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 lg:mb-20">
          <div>
            <p className="text-sm text-muted-foreground mb-4 scroll-animate">Recent works</p>
            <h2 className="font-display text-display-lg text-foreground scroll-animate">
              PROJECTS
            </h2>
          </div>
          <p className="text-sm text-muted-foreground scroll-animate">2024</p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="scroll-animate group border border-border hover:border-pink transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 p-8">
                {/* Number & Year */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="text-pink font-medium">{project.number}</span>
                  <span className="text-muted-foreground text-sm">{project.year}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground group-hover:text-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.subtitle}</p>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-muted-foreground border border-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex items-center justify-end">
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-pink transition-colors" />
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

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 100);
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

  const experiences = [
    {
      title: "Internship Trainee (AI & Data Science)",
      company: "Upflairs Pvt. Ltd.",
      location: "Jaipur, Rajasthan",
      period: "June 2025 – July 2025",
      responsibilities: [
        "Developed and deployed machine learning models in real-world scenarios",
        "Performed data preprocessing and model training",
        "Integrated solutions into scalable applications",
        "Collaborated with mentors and teammates on AI/ML projects",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">Career Journey</p>
          <h2 className="section-title scroll-animate">Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="scroll-animate relative pl-8 pb-8 border-l border-primary/20 last:pb-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary animate-pulse-glow" />
              
              <div className="glass rounded-xl p-8 ml-4 card-hover group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-mono font-bold text-xl text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-primary/80 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

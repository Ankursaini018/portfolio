import { Calendar, MapPin } from "lucide-react";
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
    <section ref={sectionRef} id="experience" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 4:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">experience</p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Career Journey</p>
          <h2 className="section-title scroll-animate">Experience</h2>
        </div>
        
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="scroll-animate"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 border-t border-foreground/10 py-12">
                {/* Left Column - Meta */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono-alt text-xs">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="font-mono-alt text-xs">{exp.location}</span>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-medium text-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{exp.company}</p>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-foreground/50 mt-1">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
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

export default Experience;

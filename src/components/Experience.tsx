import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import Marquee from "./Marquee";

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
    <section ref={sectionRef} id="experience" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-30">
        <Marquee text="EXPERIENCE" speed="slow" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24">
          <p className="text-sm text-muted-foreground mb-4 scroll-animate uppercase tracking-[0.3em]">
            03 — Career
          </p>
          <h2 className="font-display text-display-xl text-foreground scroll-animate">
            EXPERIENCE
          </h2>
        </div>
        
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="scroll-animate border border-border bg-card p-8 lg:p-12 hover-lift hover:border-red transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Left Column - Meta */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-red" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-red" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-8">
                  <h3 className="font-display text-3xl text-foreground mb-2">{exp.title}</h3>
                  <p className="text-red text-lg mb-8">{exp.company}</p>
                  
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-4 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 flex-shrink-0" />
                        <span className="text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
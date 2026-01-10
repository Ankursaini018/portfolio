import { useEffect, useRef, Suspense } from "react";
import Marquee from "./Marquee";
import FloatingShapes from "./3d/FloatingShapes";
import TiltCard from "./3d/TiltCard";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 80);
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

  const skillCategories = [
    {
      title: "Programming",
      number: "01",
      skills: ["Python", "SQL", "C++", "Flask"],
    },
    {
      title: "Data Science",
      number: "02",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      number: "03",
      skills: ["Scikit-learn", "Deep Learning", "Neural Networks", "Model Training"],
    },
    {
      title: "Soft Skills",
      number: "04",
      skills: ["Problem-Solving", "Team Collaboration", "Data Visualization", "Communication"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <FloatingShapes variant="skills" className="z-0 opacity-50" />
      </Suspense>

      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-30">
        <Marquee text="SKILLS" speed="slow" direction="right" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24">
          <p className="text-sm text-muted-foreground mb-4 scroll-animate uppercase tracking-[0.3em]">
            02 — Expertise
          </p>
          <h2 className="font-display text-display-xl text-foreground scroll-animate">
            SKILLS & TOOLS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard key={category.title} maxTilt={12} glareEnabled>
              <div 
                className="scroll-animate bg-card/90 backdrop-blur-sm p-8 group hover-lift border border-border hover:border-red transition-all duration-500 h-full"
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-red text-sm font-medium">{category.number}</span>
                </div>
                <h3 className="font-display text-3xl text-foreground mb-8 group-hover:text-red transition-colors">
                  {category.title.toUpperCase()}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <p 
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red" />
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
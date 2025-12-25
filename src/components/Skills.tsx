import { useEffect, useRef } from "react";

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
      code: "2.1",
      skills: ["Python", "SQL", "C++", "Flask"],
    },
    {
      title: "Data Science",
      code: "2.2",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      code: "2.3",
      skills: ["Scikit-learn", "Deep Learning", "Neural Networks", "Model Training"],
    },
    {
      title: "Soft Skills",
      code: "2.4",
      skills: ["Problem-Solving", "Team Collaboration", "Data Visualization", "Communication"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 2:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">skills</p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Technical Arsenal</p>
          <h2 className="section-title scroll-animate">Skills & Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="scroll-animate bg-background p-8 group hover:bg-secondary/50 transition-colors duration-500"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono-alt text-xs text-muted-foreground">{category.code}</span>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <p 
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </p>
                ))}
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

export default Skills;

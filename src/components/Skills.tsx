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
      skills: ["Python", "SQL", "C++", "Flask"],
    },
    {
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "Deep Learning", "Neural Networks", "Model Training"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Team Collaboration", "Data Visualization", "Communication"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">Technical Arsenal</p>
          <h2 className="section-title scroll-animate">Skills & Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="scroll-animate glass rounded-xl p-6 card-hover group"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-mono font-bold text-lg text-primary mb-5 group-hover:text-foreground transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 bg-secondary/80 rounded-lg text-sm text-foreground/80 font-medium hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

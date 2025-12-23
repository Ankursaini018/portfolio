const Skills = () => {
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
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Technical Arsenal"}</p>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-mono font-bold text-lg text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
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

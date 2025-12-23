import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Career Journey"}</p>
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary animate-pulse-glow" />
              
              <div className="bg-card border border-border rounded-xl p-6 ml-4 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-mono font-bold text-xl text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
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
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
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

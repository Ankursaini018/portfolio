import { Brain, Code2, Database, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Brain, label: "Machine Learning", description: "Deep Learning & Neural Networks" },
    { icon: Code2, label: "Python Expert", description: "Flask, NumPy, Pandas" },
    { icon: Database, label: "Data Science", description: "Analysis & Visualization" },
    { icon: TrendingUp, label: "Problem Solver", description: "Real-world Solutions" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// About Me"}</p>
          <h2 className="section-title">Who I Am</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dynamic <span className="text-primary font-semibold">AI/ML & Data Science enthusiast</span> with 
              practical experience in developing and deploying machine learning models. My expertise in 
              Python, SQL, and data visualization tools enables me to create intelligent solutions that 
              address real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known for strong <span className="text-primary font-semibold">problem-solving abilities</span> and 
              a collaborative spirit, I thrive in team-driven environments. I'm committed to continuous 
              learning and innovation in the ever-evolving landscape of technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing <span className="text-primary font-semibold">B.Tech in Artificial Intelligence</span> at 
              B.K. Birla Institute of Engineering & Technology, Pilani.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="bg-card border border-border rounded-xl p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

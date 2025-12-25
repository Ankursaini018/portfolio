import { Brain, Code2, Database, TrendingUp } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

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
          {/* Profile Picture - Left Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-40 animate-pulse-glow scale-110" />
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <img 
                src={profilePicture} 
                alt="Ankur Saini" 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-xl" />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6 order-2 lg:order-none">
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

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-card border border-border rounded-xl p-4 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-mono font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

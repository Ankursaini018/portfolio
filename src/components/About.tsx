import { Brain, Code2, Database, TrendingUp } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";
import { useEffect, useRef } from "react";

const About = () => {
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

  const highlights = [
    { icon: Brain, label: "Machine Learning", description: "Deep Learning & Neural Networks" },
    { icon: Code2, label: "Python Expert", description: "Flask, NumPy, Pandas" },
    { icon: Database, label: "Data Science", description: "Analysis & Visualization" },
    { icon: TrendingUp, label: "Problem Solver", description: "Real-world Solutions" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">About Me</p>
          <h2 className="section-title scroll-animate">Who I Am</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed scroll-animate">
              Dynamic <span className="text-foreground font-medium">AI/ML & Data Science enthusiast</span> with 
              practical experience in developing and deploying machine learning models. My expertise in 
              Python, SQL, and data visualization tools enables me to create intelligent solutions that 
              address real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed scroll-animate">
              Known for strong <span className="text-foreground font-medium">problem-solving abilities</span> and 
              a collaborative spirit, I thrive in team-driven environments. I'm committed to continuous 
              learning and innovation in the ever-evolving landscape of technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed scroll-animate">
              Currently pursuing <span className="text-foreground font-medium">B.Tech in Artificial Intelligence</span> at 
              B.K. Birla Institute of Engineering & Technology, Pilani.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="scroll-animate glass rounded-xl p-5 card-hover group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-mono font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Picture - Right Side */}
          <div className="flex justify-center lg:justify-start scroll-animate">
            <div className="relative group">
              {/* Animated glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-110 animate-pulse-glow" />
              
              {/* Image */}
              <img 
                src={profilePicture} 
                alt="Ankur Saini" 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-border/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 border border-accent/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
    <section ref={sectionRef} id="about" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 1:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">about</p>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Why AI/ML?</p>
          <h2 className="text-huge text-stroke-thin font-light tracking-tighter scroll-animate">
            C R E A T I V I T Y
          </h2>
        </div>

        {/* Large Text Block */}
        <div className="max-w-4xl mb-20">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed scroll-animate">
            <span className="text-muted-foreground">AI/ML solutions are the</span>{" "}
            <span className="text-foreground">intersection of creativity</span>{" "}
            <span className="text-muted-foreground">and technicality to form</span>{" "}
            <span className="text-foreground">bespoke digital experiences</span>{" "}
            <span className="text-muted-foreground">that spark</span>{" "}
            <span className="text-foreground">innovation.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed scroll-animate">
              Dynamic AI/ML & Data Science enthusiast with practical experience in developing 
              and deploying machine learning models. My expertise in Python, SQL, and data 
              visualization tools enables me to create intelligent solutions that address 
              real-world challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed scroll-animate">
              Known for strong problem-solving abilities and a collaborative spirit, I thrive 
              in team-driven environments. I'm committed to continuous learning and innovation 
              in the ever-evolving landscape of technology.
            </p>
            <p className="text-muted-foreground leading-relaxed scroll-animate">
              Currently pursuing B.Tech in Artificial Intelligence at B.K. Birla Institute 
              of Engineering & Technology, Pilani.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="scroll-animate card-minimal p-6 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end scroll-animate">
            <div className="relative">
              <img 
                src={profilePicture} 
                alt="Ankur Saini" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l border-t border-foreground/30" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r border-t border-foreground/30" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l border-b border-foreground/30" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r border-b border-foreground/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-6 right-6">
        <div className="line-horizontal" />
      </div>
    </section>
  );
};

export default About;

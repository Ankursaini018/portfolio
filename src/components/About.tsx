import { Brain, Code2, Database, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import Marquee from "./Marquee";

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
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-50">
        <Marquee text="ABOUT" speed="slow" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-sm text-muted-foreground mb-4 scroll-animate uppercase tracking-[0.3em]">
            01 — About Me
          </p>
          <h2 className="font-display text-display-xl text-foreground scroll-animate">
            MANIFESTO
          </h2>
        </div>

        {/* Large Text Block */}
        <div className="max-w-5xl mb-20 lg:mb-28">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed scroll-animate text-foreground">
            For me, AI/ML means <span className="text-red font-normal">intelligent solutions</span>, 
            clean code, and attention to <span className="text-red font-normal">real-world impact</span>. 
            Create fast. On time. On brief. Building my own projects and open to new collaborations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed scroll-animate">
              Dynamic AI/ML & Data Science enthusiast with practical experience in developing 
              and deploying machine learning models. My expertise in Python, SQL, and data 
              visualization tools enables me to create intelligent solutions that address 
              real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed scroll-animate">
              Known for strong problem-solving abilities and a collaborative spirit, I thrive 
              in team-driven environments. Currently pursuing B.Tech in Artificial Intelligence 
              at B.K. Birla Institute of Engineering & Technology, Pilani.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="scroll-animate card-minimal p-6 group hover-lift"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-red mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats/Numbers */}
          <div className="scroll-animate">
            <div className="grid grid-cols-2 gap-12">
              <div className="border-l-2 border-red pl-6">
                <p className="font-display text-6xl lg:text-7xl text-foreground">2+</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Years of Learning</p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-display text-6xl lg:text-7xl text-foreground">5+</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Projects Built</p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-display text-6xl lg:text-7xl text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Technologies</p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-display text-6xl lg:text-7xl text-foreground">∞</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Curiosity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
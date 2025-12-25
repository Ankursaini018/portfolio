import { GraduationCap, BookOpen, Award } from "lucide-react";
import { useEffect, useRef } from "react";

const Education = () => {
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

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence",
    institution: "B.K. Birla Institute of Engineering & Technology",
    location: "Pilani",
    period: "Sept 2023 – Sept 2027",
    activities: ["Basketball", "Gym"],
  };

  const courses = [
    {
      title: "Data Science with AI & ML",
      institution: "Upflairs Pvt. Ltd.",
      period: "June – July 2025",
    },
    {
      title: "C++ Programming",
      institution: "IIT Bombay",
      period: "June 2024",
    },
    {
      title: "Python Training",
      institution: "IIT Bombay",
      period: "June 2024",
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">Academic Background</p>
          <h2 className="section-title scroll-animate">Education</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Education */}
          <div className="scroll-animate glass rounded-xl p-8 card-hover group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-foreground">{education.degree}</h3>
                <p className="text-primary/80 font-medium">{education.field}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">{education.institution}</span>, {education.location}
              </p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">Activities & Societies:</p>
              <div className="flex gap-2">
                {education.activities.map((activity) => (
                  <span 
                    key={activity}
                    className="px-4 py-2 bg-secondary/80 rounded-lg text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses & Certifications */}
          <div className="scroll-animate glass rounded-xl p-8 card-hover group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground">Courses & Training</h3>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-all duration-300 group/item"
                >
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground group-hover/item:text-primary transition-colors">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.institution}</p>
                    <p className="text-xs text-primary/70 mt-1">{course.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

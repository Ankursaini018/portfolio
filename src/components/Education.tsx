import { GraduationCap, Award } from "lucide-react";
import { useEffect, useRef, Suspense } from "react";
import Marquee from "./Marquee";
import TiltCard from "./3d/TiltCard";

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
    <section ref={sectionRef} id="education" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-30">
        <Marquee text="EDUCATION" speed="slow" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24">
          <p className="text-sm text-muted-foreground mb-4 scroll-animate uppercase tracking-[0.3em]">
            05 — Academic
          </p>
          <h2 className="font-display text-display-xl text-foreground scroll-animate">
            EDUCATION
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <TiltCard maxTilt={8} glareEnabled>
            <div className="scroll-animate border border-border bg-card/90 backdrop-blur-sm p-8 lg:p-12 hover-lift hover:border-red transition-all duration-500 h-full">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 border border-red flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-red" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground">{education.degree}</h3>
                  <p className="text-red text-lg">{education.field}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground text-lg">
                  <span className="text-foreground">{education.institution}</span>, {education.location}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{education.period}</p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Activities</p>
                <div className="flex gap-4">
                  {education.activities.map((activity) => (
                    <span 
                      key={activity}
                      className="text-sm text-muted-foreground border border-border px-4 py-2 hover:border-red hover:text-red transition-all duration-300"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
          
          {/* Courses & Certifications */}
          <TiltCard maxTilt={8} glareEnabled>
            <div className="scroll-animate border border-border bg-card/90 backdrop-blur-sm p-8 lg:p-12 hover-lift hover:border-red transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-red flex items-center justify-center">
                  <Award className="w-6 h-6 text-red" />
                </div>
                <h3 className="font-display text-2xl text-foreground">COURSES & TRAINING</h3>
              </div>
              
              <div className="space-y-8">
                {courses.map((course, index) => (
                  <div 
                    key={course.title}
                    className="group border-l-2 border-border hover:border-red pl-6 transition-all duration-300"
                  >
                    <h4 className="font-medium text-foreground text-lg group-hover:text-red transition-colors">{course.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{course.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{course.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
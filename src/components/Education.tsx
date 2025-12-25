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
    <section ref={sectionRef} id="education" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 5:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">education</p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Academic Background</p>
          <h2 className="section-title scroll-animate">Education</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-px bg-foreground/10">
          {/* Main Education */}
          <div className="scroll-animate bg-background p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-8">
              <GraduationCap className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground">{education.degree}</h3>
                <p className="text-sm text-muted-foreground">{education.field}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">{education.institution}</span>, {education.location}
              </p>
              <p className="font-mono-alt text-xs text-muted-foreground">{education.period}</p>
            </div>
            
            <div>
              <p className="font-mono-alt text-xs text-muted-foreground uppercase tracking-wider mb-3">Activities</p>
              <div className="flex gap-4">
                {education.activities.map((activity) => (
                  <span 
                    key={activity}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses & Certifications */}
          <div className="scroll-animate bg-background p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-medium text-foreground">Courses & Training</h3>
            </div>
            
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className="group"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">{course.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{course.institution}</p>
                  <p className="font-mono-alt text-xs text-muted-foreground mt-1">{course.period}</p>
                </div>
              ))}
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

export default Education;

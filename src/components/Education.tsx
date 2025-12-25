import { GraduationCap, Award } from "lucide-react";
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
    <section ref={sectionRef} id="education" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <p className="text-sm text-muted-foreground mb-4 scroll-animate">Academic Background</p>
          <h2 className="font-display text-display-lg text-foreground scroll-animate">
            EDUCATION
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <div className="scroll-animate border border-border bg-card p-8 lg:p-12 hover-lift">
            <div className="flex items-start gap-4 mb-8">
              <GraduationCap className="w-6 h-6 text-pink" />
              <div>
                <h3 className="font-display text-2xl text-foreground">{education.degree}</h3>
                <p className="text-pink">{education.field}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">
                <span className="text-foreground">{education.institution}</span>, {education.location}
              </p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Activities</p>
              <div className="flex gap-4">
                {education.activities.map((activity) => (
                  <span 
                    key={activity}
                    className="text-sm text-muted-foreground border border-border px-3 py-1 hover:border-pink hover:text-pink transition-colors"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses & Certifications */}
          <div className="scroll-animate border border-border bg-card p-8 lg:p-12 hover-lift">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-6 h-6 text-pink" />
              <h3 className="font-display text-2xl text-foreground">COURSES & TRAINING</h3>
            </div>
            
            <div className="space-y-6">
              {courses.map((course) => (
                <div 
                  key={course.title}
                  className="group border-l-2 border-border hover:border-pink pl-4 transition-colors"
                >
                  <h4 className="font-medium text-foreground group-hover:text-pink transition-colors">{course.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{course.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{course.period}</p>
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

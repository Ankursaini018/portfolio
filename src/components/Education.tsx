import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
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
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Academic Background"}</p>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Education */}
          <div className="bg-card border border-border rounded-xl p-8 card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-foreground">{education.degree}</h3>
                <p className="text-primary font-semibold">{education.field}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">{education.institution}</span>, {education.location}
              </p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Activities & Societies:</p>
              <div className="flex gap-2">
                {education.activities.map((activity) => (
                  <span 
                    key={activity}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses & Certifications */}
          <div className="bg-card border border-border rounded-xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground">Courses & Training</h3>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.institution}</p>
                    <p className="text-xs text-primary">{course.period}</p>
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

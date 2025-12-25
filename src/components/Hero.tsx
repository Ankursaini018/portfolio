import { Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="split-section">
      {/* Left Side - Dark with Image */}
      <div className="split-dark min-h-[60vh] lg:min-h-screen flex flex-col">
        {/* Profile Image */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src={profilePicture}
            alt="Ankur Saini"
            className="w-full h-full object-cover object-center animate-scale-in"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Navigation - Bottom of dark section */}
        <nav className="p-8 lg:p-12">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link text-xl lg:text-2xl font-medium animate-slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Side - Light with Content */}
      <div className="split-light min-h-[40vh] lg:min-h-screen flex flex-col justify-between p-8 lg:p-12">
        {/* Main Title */}
        <div className="pt-8 lg:pt-16">
          <h1 className="font-display text-display-xl text-foreground leading-none animate-slide-in-right">
            AI/ML
          </h1>
          <h1 className="font-display text-display-xl text-foreground leading-none animate-slide-in-right delay-100">
            ENGINEER
          </h1>
          <h2 className="font-display text-display-lg text-foreground/80 leading-none mt-2 animate-slide-in-right delay-200">
            & DEVELOPER
          </h2>
        </div>

        {/* Description */}
        <div className="py-8 lg:py-12 max-w-md animate-slide-up delay-400">
          <p className="text-lg font-medium text-foreground mb-2">
            I'm Ankur Saini.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="dot-pink mr-2" />
            I craft intelligent AI/ML solutions
            <br />
            that solve real problems, deliver insights, and push boundaries.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 animate-slide-up delay-600">
          <a
            href="mailto:sainanku018@gmail.com"
            className="flex items-center gap-2 text-foreground hover:text-pink transition-colors link-underline"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="https://github.com/Ankursaini018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-pink transition-colors link-underline"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ankur-saini-596173374"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-pink transition-colors link-underline"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

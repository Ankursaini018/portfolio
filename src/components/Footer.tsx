import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Mail, href: "mailto:sainanku018@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/Ankursaini018", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ankur-saini-596173374", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="font-display text-4xl text-foreground hover:text-pink transition-colors"
            >
              AS.
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-pink transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-muted-foreground hover:text-pink transition-colors text-sm"
            >
              Back to top
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ankur Saini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

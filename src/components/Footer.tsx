import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Mail, href: "mailto:officialankur0707@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/Ankursaini018", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ankur-saini-596173374", label: "LinkedIn" },
  ];

  return (
    <footer className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Large Name */}
        <div className="mb-16">
          <h2 className="font-display text-display-xxl text-foreground/10">
            ANKUR SAINI
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-end">
          {/* Logo */}
          <div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="font-display text-5xl text-foreground hover:text-red transition-colors"
            >
              AS.
            </a>
            <p className="text-muted-foreground mt-4 text-sm">
              AI/ML Engineer & Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex lg:justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-red hover:border-red transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex lg:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-muted-foreground hover:text-red transition-colors text-sm uppercase tracking-widest"
            >
              Back to top
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-red group-hover:bg-red transition-all">
                <ArrowUp className="w-4 h-4 group-hover:text-foreground transition-transform group-hover:-translate-y-1" />
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ankur Saini. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion & AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
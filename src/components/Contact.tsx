import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sainanku018@gmail.com",
      href: "mailto:sainanku018@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9352389118",
      href: "tel:+919352389118",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pilani, Jhunjhunu, Rajasthan, India",
      href: null,
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ankursaini018",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ankur-saini-596173374",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Get In Touch"}</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle mx-auto mt-4">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about AI/ML!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href || undefined}
                className={`bg-card border border-border rounded-xl p-6 text-center card-hover ${info.href ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-medium text-foreground text-sm">{info.value}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-mono glow-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="mailto:sainanku018@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

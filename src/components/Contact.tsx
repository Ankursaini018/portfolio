import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      value: "Pilani, Rajasthan, India",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: result.data.name,
        email: result.data.email,
        subject: result.data.subject || null,
        message: result.data.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase scroll-animate">Get In Touch</p>
          <h2 className="section-title scroll-animate">Contact Me</h2>
          <p className="section-subtitle mx-auto mt-4 scroll-animate">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-animate glass rounded-xl p-8 card-hover">
            <h3 className="font-mono font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse-glow">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-mono font-bold text-lg text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-all ${errors.name ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-all ${errors.email ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-all min-h-[150px] resize-none ${errors.message ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground font-medium glow-primary hover:opacity-90 transition-all group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="scroll-animate glass rounded-xl p-8 card-hover">
              <h3 className="font-mono font-bold text-xl text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href || undefined}
                    className={`flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group ${info.href ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="scroll-animate glass rounded-xl p-8 card-hover">
              <h3 className="font-mono font-bold text-xl text-foreground mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, ArrowUpRight } from "lucide-react";
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
    <section ref={sectionRef} id="contact" className="py-32 relative bg-noise">
      {/* Chapter indicator */}
      <div className="absolute top-8 left-6">
        <p className="font-mono-alt text-xs text-muted-foreground scroll-animate">chapter 6:</p>
        <p className="font-mono-alt text-xs text-foreground scroll-animate">contact</p>
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="section-subtitle mb-4 scroll-animate">Get In Touch</p>
          <h2 className="section-title scroll-animate">Contact Me</h2>
          <p className="text-muted-foreground mt-6 max-w-lg scroll-animate">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-foreground/10">
          {/* Contact Form */}
          <div className="scroll-animate bg-background p-8 lg:p-12">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-8 flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-8 h-8 text-foreground mb-4" />
                <h4 className="text-lg font-medium text-foreground mb-2">Message Sent!</h4>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. I'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus:border-foreground focus-visible:ring-0 ${errors.name ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-2">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus:border-foreground focus-visible:ring-0 ${errors.email ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-2">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus:border-foreground focus-visible:ring-0"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus:border-foreground focus-visible:ring-0 min-h-[120px] resize-none ${errors.message ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none font-medium"
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
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-background p-8 lg:p-12 space-y-8">
            <div className="scroll-animate">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-8">Contact Info</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href || undefined}
                    className={`flex items-start gap-4 group ${info.href ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <info.icon className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-mono-alt text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm text-foreground group-hover:text-muted-foreground transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="scroll-animate pt-8 border-t border-foreground/10">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Connect</h3>
              <div className="flex gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-hover"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
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

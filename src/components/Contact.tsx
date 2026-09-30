import { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "officialankur0707@gmail.com",
      href: "mailto:officialankur0707@gmail.com",
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
    <section id="contact" className="diroz-section diroz-contact">
      <div className="diroz-shell">
        <div className="section-heading"><span className="section-index">/ 06 — GET IN TOUCH</span><span>START A CONVERSATION</span></div>
        <h2 className="section-display">LET'S <span>CONNECT.</span></h2>
        <p className="contact-lede">Have a project in mind or want to collaborate? Drop me a message.</p>

        <div className="contact-layout grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-medium text-foreground uppercase tracking-widest mb-8 flex items-center gap-3">
              <div className="w-8 h-8 border border-primary flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center border border-border bg-card p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-xl font-medium text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-primary focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-lg ${errors.name ? "border-destructive" : ""}`}
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
                    className={`bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-primary focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-lg ${errors.email ? "border-destructive" : ""}`}
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
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-primary focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-lg"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-primary focus-visible:ring-0 min-h-[150px] resize-none text-foreground placeholder:text-muted-foreground text-lg ${errors.message ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-medium text-foreground uppercase tracking-widest mb-8">Contact Info</h3>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href || undefined}
                    className={`flex items-start gap-4 group ${info.href ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{info.label}</p>
                      <p className="text-foreground text-lg group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-widest mb-8">Connect</h3>
              <div className="flex gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                      <social.icon className="w-5 h-5 group-hover:text-foreground" />
                    </div>
                    <span className="link-underline">{social.label}</span>
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
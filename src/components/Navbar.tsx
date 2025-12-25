import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a 
            href="#" 
            className="font-display text-3xl text-foreground hover:text-red transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            AS.
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin')}
                className="border-red text-red hover:bg-red hover:text-foreground rounded-none text-xs uppercase tracking-wider"
              >
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Button>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background z-50 animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-display text-4xl text-foreground hover:text-red transition-colors animate-fade-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label.toUpperCase()}
                </button>
              ))}
              {isAdmin && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    navigate('/admin');
                    setIsMobileMenuOpen(false);
                  }}
                  className="border-red text-red hover:bg-red hover:text-foreground rounded-none animate-fade-slide-up"
                  style={{ animationDelay: `${navLinks.length * 100}ms` }}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
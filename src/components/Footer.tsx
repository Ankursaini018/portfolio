import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ankur Saini. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-foreground/10 bg-noise">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono-alt text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ankur Saini. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono-alt text-xs uppercase tracking-wider"
          >
            Back to top
            <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-1" />
          </button>
          
          <p className="font-mono-alt text-xs text-muted-foreground">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

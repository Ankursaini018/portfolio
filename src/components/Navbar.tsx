import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, Shield, X } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { scrollPortfolioTo } from "@/lib/portfolioScroll";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const jump = (href: string) => {
    setOpen(false);
    scrollPortfolioTo(href);
  };
  return (
    <nav className={`diroz-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
      <div className="nav-left">
        <a className="nav-brand" href="#top" onClick={(e) => { e.preventDefault(); setOpen(false); scrollPortfolioTo(0); }}>Ankur<span>®</span></a>
        <span className="nav-divider" />
        <Button variant="ghost" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="nav-menu-button">{open ? <X /> : <Menu />} <span>{open ? "Close" : "Menu"}</span></Button>
      </div>
      <Button asChild className="nav-contact"><a href="#contact" onClick={(e) => { e.preventDefault(); jump("#contact"); }}>Contact Me <ArrowUpRight /></a></Button>
      {open && <div className="nav-panel">
        <p className="nav-panel-caption">EXPLORE / ANKUR SAINI</p>
        <div className="nav-panel-links">{links.map((link, index) => <Button key={link.href} variant="ghost" onClick={() => jump(link.href)}><small>0{index + 1}</small>{link.label}<ArrowUpRight /></Button>)}
        {isAdmin && <Button variant="ghost" onClick={() => { setOpen(false); navigate("/admin"); }}><small>07</small>Admin<Shield /></Button>}</div>
        <p className="nav-panel-footer">AI / ML ENGINEER · PILANI, INDIA</p>
      </div>}
    </nav>
  );
};
export default Navbar;

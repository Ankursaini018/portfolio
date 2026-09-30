import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => <footer className="diroz-footer">
  <div className="diroz-shell footer-top"><span>ANKUR SAINI ®</span><span>AI / ML ENGINEER<br />PILANI, INDIA</span><div className="footer-links"><a href="mailto:officialankur0707@gmail.com" aria-label="Email"><Mail /></a><a href="https://github.com/Ankursaini018" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github /></a><a href="https://linkedin.com/in/ankur-saini-596173374" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a></div></div>
  <div className="diroz-shell"><h2>LET'S BUILD<br />WHAT'S NEXT<span>.</span></h2><a className="footer-email" href="mailto:officialankur0707@gmail.com">officialankur0707@gmail.com <ArrowUpRight /></a></div>
  <div className="diroz-shell footer-bottom"><span>© {new Date().getFullYear()} ANKUR SAINI</span><span>DESIGNED TO THINK DIFFERENTLY</span><Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</Button><Link to="/admin" aria-label="Admin sign in" className="footer-admin">·</Link></div>
</footer>;
export default Footer;

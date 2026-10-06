import { Brain, Code2, Database, TrendingUp } from "lucide-react";
import portrait from "@/assets/hero-portrait-green.png.asset.json";

const highlights = [
  { icon: Brain, label: "Generative AI", description: "LangChain & Large Language Models" },
  { icon: Code2, label: "Software Engineering", description: "Python & Full-stack Development" },
  { icon: Database, label: "Data Science", description: "EDA, Feature Engineering & Models" },
  { icon: TrendingUp, label: "Startup Builder", description: "AI-driven Solutions & Product Thinking" },
];

const About = () => <section id="about" className="diroz-section diroz-about">
  <div className="diroz-shell">
    <div className="section-heading"><span className="section-index">/ 01 — ABOUT ME</span><span>THE PERSON BEHIND THE WORK</span></div>
    <p className="about-statement">I build <em>intelligent systems</em> that turn complex data into real-world impact.</p>
    <div className="about-grid">
      <div className="about-photo"><img src={portrait.url} alt="Ankur Saini in a green suit" loading="lazy" onError={(event) => { if (window.location.hostname === "localhost" && event.currentTarget.src !== `https://ankursaini.lovable.app${portrait.url}`) event.currentTarget.src = `https://ankursaini.lovable.app${portrait.url}`; }} /><span>ANKUR SAINI / KHETRI, INDIA</span></div>
      <div className="about-details">
        <span className="section-index">WHO I AM ↗</span>
        <h2>Learning by building.<br />AI with purpose.</h2>
        <p>I'm an AI-focused engineering student and early-stage startup builder working at the intersection of artificial intelligence, software engineering, and system design. From AI models to full-stack applications, I focus on efficient, production-ready code and strong computer science fundamentals to build scalable, impactful solutions.</p>
        <p>I'm pursuing a B.Tech in Artificial Intelligence at B.K. Birla Institute of Engineering & Technology, Pilani, while building a startup focused on AI-driven solutions. My interests include AI systems, backend engineering, scalable architectures, and intelligent automation. I'm always open to collaboration in AI, systems, and product development.</p>
        <div className="about-highlights">{highlights.map((item) => <div key={item.label}><item.icon /><div><strong>{item.label}</strong><span>{item.description}</span></div></div>)}</div>
      </div>
    </div>
  </div>
</section>;
export default About;

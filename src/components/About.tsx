import { Brain, Code2, Database, TrendingUp } from "lucide-react";
import portrait from "@/assets/hero-portrait-green.png.asset.json";

const highlights = [
  { icon: Brain, label: "Machine Learning", description: "Deep Learning & Neural Networks" },
  { icon: Code2, label: "Python", description: "Flask, NumPy, Pandas" },
  { icon: Database, label: "Data Science", description: "Analysis & Visualization" },
  { icon: TrendingUp, label: "Problem Solving", description: "Real-world Solutions" },
];

const About = () => <section id="about" className="diroz-section diroz-about">
  <div className="diroz-shell">
    <div className="section-heading"><span className="section-index">/ 01 — ABOUT ME</span><span>THE PERSON BEHIND THE WORK</span></div>
    <p className="about-statement">I build <em>intelligent systems</em> that turn complex data into real-world impact.</p>
    <div className="about-grid">
      <div className="about-photo"><img src={portrait.url} alt="Ankur Saini in a green suit" loading="lazy" onError={(event) => { if (window.location.hostname === "localhost" && event.currentTarget.src !== `https://ankursaini.lovable.app${portrait.url}`) event.currentTarget.src = `https://ankursaini.lovable.app${portrait.url}`; }} /><span>ANKUR SAINI / PILANI, INDIA</span></div>
      <div className="about-details">
        <span className="section-index">WHO I AM ↗</span>
        <h2>Curious by nature.<br />Engineer by practice.</h2>
        <p>I'm an AI/ML and Data Science enthusiast with hands-on experience developing and deploying machine learning models. I work with Python, SQL, and data visualization to create useful solutions for real-world challenges.</p>
        <p>I enjoy solving problems with people. I'm currently pursuing a B.Tech in Artificial Intelligence at B.K. Birla Institute of Engineering & Technology, Pilani.</p>
        <div className="about-highlights">{highlights.map((item) => <div key={item.label}><item.icon /><div><strong>{item.label}</strong><span>{item.description}</span></div></div>)}</div>
      </div>
    </div>
  </div>
</section>;
export default About;

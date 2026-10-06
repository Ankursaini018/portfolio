const categories = [
  { title: "Generative AI", items: ["LangChain", "Large Language Models (LLM)", "Vibe Coding"] },
  { title: "Data Science", items: ["Pandas", "EDA", "Feature Engineering", "Matplotlib", "Seaborn", "Power BI / Tableau"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Model Development", "Model Evaluation", "Optimization & Validation", "Computer Vision"] },
  { title: "Engineering", items: ["Python", "Flask", "Full-stack Development", "Data Structures", "System Design", "Team Collaboration"] },
];
const Skills = () => <section id="skills" className="diroz-section diroz-skills"><div className="diroz-shell">
  <div className="section-heading"><span className="section-index">/ 02 — EXPERTISE</span><span>THE TOOLKIT</span></div>
  <h2 className="section-display">SKILLS <span>& TOOLS</span></h2>
  <div className="skills-list">{categories.map((category, i) => <div key={category.title} className="skill-row"><span className="row-number">0{i + 1}</span><h3>{category.title}</h3><div className="skill-tags">{category.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
</div></section>;
export default Skills;

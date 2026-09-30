const categories = [
  { title: "Programming", items: ["Python", "SQL", "C++", "Flask"] },
  { title: "Data Science", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Deep Learning", "Neural Networks", "Model Training"] },
  { title: "Soft Skills", items: ["Problem-Solving", "Team Collaboration", "Data Visualization", "Communication"] },
];
const Skills = () => <section id="skills" className="diroz-section diroz-skills"><div className="diroz-shell">
  <div className="section-heading"><span className="section-index">/ 02 — EXPERTISE</span><span>THE TOOLKIT</span></div>
  <h2 className="section-display">SKILLS <span>& TOOLS</span></h2>
  <div className="skills-list">{categories.map((category, i) => <div key={category.title} className="skill-row"><span className="row-number">0{i + 1}</span><h3>{category.title}</h3><div className="skill-tags">{category.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
</div></section>;
export default Skills;

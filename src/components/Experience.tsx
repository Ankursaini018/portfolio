const experiences = [
  {
    year: "2026", period: "JUNE — AUGUST", location: "BENGALURU", type: "DATA SCIENCE / 01",
    title: "Data Associate L1", focus: "Data Science & ML", company: "INFOTACT SOLUTIONS",
    responsibilities: [
      "Worked on data science and machine learning projects involving data collection, preprocessing, analysis, and model development",
      "Collaborated with teams to understand requirements and implement statistical and machine learning solutions",
      "Performed exploratory data analysis and visualization using Python, Matplotlib, Seaborn, and Power BI/Tableau",
      "Built and evaluated models, improving performance through optimization and validation",
      "Worked with real-world datasets and industry workflows in a remote environment",
    ],
  },
  {
    year: "2026", period: "JUNE — JULY", location: "JAIPUR, RAJASTHAN", type: "INTERNSHIP / 02",
    title: "Generative AI", focus: "Intern", company: "UPFLAIRS PVT LTD", responsibilities: [],
  },
  {
    year: "2025", period: "JUNE — JULY", location: "JAIPUR, RAJASTHAN", type: "INTERNSHIP / 03",
    title: "Data Science", focus: "AI & ML Intern", company: "UPFLAIRS PVT LTD",
    responsibilities: [
      "Developed machine learning models on real-world datasets using Python, Pandas, and Scikit-learn to solve practical business problems",
      "Performed data preprocessing and feature engineering to improve data quality and model performance",
      "Trained and evaluated models through structured experimentation to improve prediction accuracy and reliability",
      "Collaborated with mentors and teammates to design and implement AI-based solutions",
      "Assisted in integrating models into Flask applications for real-time predictions",
      "Applied data analysis and visualization to extract insights and support decision-making",
    ],
  },
];

const Experience = () => <section id="experience" className="diroz-section diroz-experience"><div className="diroz-shell">
  <div className="section-heading"><span className="section-index">/ 03 — CAREER</span><span>WHERE I'VE WORKED</span></div>
  <h2 className="section-display">REAL-WORLD <span>EXPERIENCE.</span></h2>
  {experiences.map(experience => <div className="experience-grid" key={`${experience.company}-${experience.year}`}><div className="experience-meta"><span>{experience.year}</span><p>{experience.period}</p><p>{experience.location}</p></div><div className="experience-body"><span className="section-index">{experience.type}</span><h3>{experience.title}<br /><span>{experience.focus}</span></h3><p className="experience-company">{experience.company}</p>{experience.responsibilities.length > 0 && <ul>{experience.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>}</div></div>)}
</div></section>;
export default Experience;

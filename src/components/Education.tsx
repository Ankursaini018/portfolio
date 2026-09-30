const courses = [
  { title: "Data Science with AI & ML", institution: "Upflairs Pvt. Ltd.", period: "June – July 2025" },
  { title: "C++ Programming", institution: "IIT Bombay", period: "June 2024" },
  { title: "Python Training", institution: "IIT Bombay", period: "June 2024" },
];
const Education = () => <section id="education" className="diroz-section diroz-education"><div className="diroz-shell">
  <div className="section-heading"><span className="section-index">/ 05 — LEARNING</span><span>FOUNDATIONS & GROWTH</span></div>
  <h2 className="section-display">ALWAYS <span>LEARNING.</span></h2>
  <div className="education-columns"><div className="education-degree"><span className="section-index">EDUCATION / 01</span><p className="education-years">2023 — 2027</p><h3>Bachelor of Technology<br /><span>Artificial Intelligence</span></h3><p>B.K. Birla Institute of Engineering & Technology<br />Pilani, Rajasthan</p><div className="education-activities">Basketball <span>·</span> Gym</div></div><div className="education-courses"><span className="section-index">COURSES & TRAINING / 02</span>{courses.map(course => <div className="course-row" key={course.title}><h3>{course.title}</h3><p>{course.institution} <span>{course.period}</span></p></div>)}</div></div>
</div></section>;
export default Education;

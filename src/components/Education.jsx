const education = [
  {
    school: "Dublin City University",
    degree: "MSc Computing (Data Analytics), First Class Honours (1:1)",
    dates: "Sep 2025 – Aug 2026",
    location: "Dublin, Ireland",
    highlight: "Ranked 13th in MSc Computing, with majors including Data Analytics, AI, NLP",
  },
  {
    school: "Bundelkhand Institute of Engineering & Technology",
    degree: "B.Tech, Computer Science & Engineering, First Class Honours (CGPA 8.24)",
    dates: "Aug 2018 – May 2022",
    location: "Jhansi, India",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {education.map((e) => (
          <div className="edu-card" key={e.school}>
            <div className="edu-top">
              <h3>{e.school}</h3>
              <span className="edu-dates">{e.dates}</span>
            </div>
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-location">{e.location}</p>
            {e.highlight && <p className="edu-highlight">{e.highlight}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

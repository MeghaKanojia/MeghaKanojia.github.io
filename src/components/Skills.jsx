const skillGroups = [
  {
    label: "Product & Analytical Thinking",
    items: ["Problem Definition", "Requirements Gathering", "KPI Design", "Stakeholder Management", "Agile/Scrum"],
  },
  {
    label: "AI & Machine Learning",
    items: ["LangGraph", "RAG", "LLM Integration (Groq, Gemini)", "PyTorch", "PyTorch Geometric", "Scikit-learn", "Graph Neural Networks"],
  },
  {
    label: "Programming & Data",
    items: ["Python", "SQL", "FastAPI", "R", "DAX"],
  },
  {
    label: "Platforms & Tools",
    items: ["Power BI", "Azure", "Databricks", "Docker", "Git", "Claude Code"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.label}>
            <h3>{g.label}</h3>
            <div className="skill-tags">
              {g.items.map((i) => (
                <span className="skill-tag" key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

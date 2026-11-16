import { otherProjects } from "../data/projects";

export default function OtherProjects() {
  return (
    <section className="section" id="other-projects">
      <h2 className="section-title">Other Projects</h2>
      <p className="section-subtitle">Smaller builds and practice work, also on GitHub.</p>
      <div className="other-grid">
        {otherProjects.map((p) => (
          <a className="other-card" key={p.name} href={p.link} target="_blank" rel="noreferrer">
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <span className="other-card-cta">View on GitHub &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

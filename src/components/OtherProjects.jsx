import { otherProjects } from "../data/projects";

export default function OtherProjects() {
  return (
    <section className="section" id="other-projects">
      <h2 className="section-title">Other Projects</h2>
      <p className="section-subtitle">Smaller builds and practice work, also on GitHub.</p>
      <div className="other-grid">
        {otherProjects.map((p) => (
          <div className="other-card" key={p.name}>
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <div className="other-card-links">
              <a href={p.link} target="_blank" rel="noreferrer" className="other-card-cta">
                GitHub &rarr;
              </a>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="other-card-cta other-card-cta-live">
                  Live &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

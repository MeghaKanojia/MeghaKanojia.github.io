import { otherProjects } from "../data/projects";

export default function OtherProjects() {
  return (
    <section className="section" id="other-projects">
      <h2 className="section-title">Other Projects</h2>
      <p className="section-subtitle">Smaller builds and practice work, also on GitHub.</p>
      <div className="other-grid">
        {otherProjects.map((p) => (
          <div className="other-card" key={p.name}>
            <div className="other-card-title-row">
              <h4>{p.name}</h4>
              {p.liveUrl && (
                <a className="live-badge" href={p.liveUrl} target="_blank" rel="noreferrer">
                  <span className="live-dot" aria-hidden="true" />
                  LIVE
                </a>
              )}
            </div>
            <p>{p.description}</p>
            <div className="other-card-links">
              <a href={p.link} target="_blank" rel="noreferrer" className="other-card-cta">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

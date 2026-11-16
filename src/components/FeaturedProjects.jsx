import { featuredProjects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Each project below follows the same structure: the problem, the solution, and the measured
        result.
      </p>
      <div className="project-list">
        {featuredProjects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-head">
              <h3>{p.name}</h3>
              <span className="project-dates">{p.dates}</span>
            </div>
            <p className="project-stack">{p.stack}</p>
            <div className="xyz">
              <div className="xyz-row">
                <span className="xyz-label">Problem</span>
                <p>{p.problem}</p>
              </div>
              <div className="xyz-row">
                <span className="xyz-label">Solution</span>
                <p>{p.solution}</p>
              </div>
              <div className="xyz-row">
                <span className="xyz-label">Results</span>
                <p>{p.results}</p>
              </div>
            </div>
            <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
              View on GitHub &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { featuredProjects } from "../data/projects";

export default function FeaturedProjects() {
  const [expanded, setExpanded] = useState(() => new Set());

  function toggle(name) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Each project follows the same structure: the problem, the solution, and the measured
        result. Click a project to open it up.
      </p>
      <div className="project-list">
        {featuredProjects.map((p) => {
          const isOpen = expanded.has(p.name);
          return (
            <article className={`project-card${isOpen ? " is-open" : ""}`} key={p.name}>
              {p.image && (
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={`${import.meta.env.BASE_URL}projects/${p.image}`}
                    alt={p.imageAlt || p.name}
                    loading="lazy"
                  />
                </div>
              )}
              <button
                className="project-toggle"
                onClick={() => toggle(p.name)}
                aria-expanded={isOpen}
              >
                <span className="project-toggle-text">
                  <span className="project-name">{p.name}</span>
                  <span className="project-dates">{p.dates}</span>
                </span>
                <span className="chevron" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="project-details">
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
                  <div className="project-link-row">
                    <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                      View on GitHub &rarr;
                    </a>
                    {p.liveUrl && (
                      <a className="project-link" href={p.liveUrl} target="_blank" rel="noreferrer">
                        View Live &rarr;
                      </a>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

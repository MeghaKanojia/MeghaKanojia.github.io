import { useEffect, useRef, useState } from "react";
import { certifications } from "../data/certifications";

const AUTO_ADVANCE_MS = 4500;

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = certifications.length;

  function goTo(i) {
    setIndex(((i % total) + total) % total);
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  const current = certifications[index];

  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">{total} certifications, sliding automatically. Use the arrows or dots to jump ahead.</p>
      <div
        className="cert-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="cert-nav cert-nav-prev" onClick={prev} aria-label="Previous certification">
          &#8249;
        </button>

        <div className={`cert-slide${current.highlight ? " cert-slide-highlight" : ""}`} key={index}>
          {current.highlight && <span className="cert-highlight-badge">Featured</span>}
          {current.image ? (
            <img
              className="cert-slide-image"
              src={`${import.meta.env.BASE_URL}certs/${current.image}`}
              alt={current.name}
              loading="lazy"
            />
          ) : (
            <div className="cert-slide-placeholder">
              <span className="cert-slide-initial">{current.issuer.slice(0, 1)}</span>
            </div>
          )}
          <h4>{current.name}</h4>
          <p className="cert-issuer">{current.issuer}</p>
          <p className="cert-date">{current.date}</p>
        </div>

        <button className="cert-nav cert-nav-next" onClick={next} aria-label="Next certification">
          &#8250;
        </button>
      </div>
      <div className="cert-dots">
        {certifications.map((c, i) => (
          <button
            key={c.name}
            className={`cert-dot${i === index ? " cert-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${c.name}`}
          />
        ))}
      </div>
    </section>
  );
}

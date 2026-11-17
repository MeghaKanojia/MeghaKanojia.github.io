import { useEffect, useRef, useState } from "react";
import { certifications } from "../data/certifications";

const AUTO_ADVANCE_MS = 2000;
const FADE_MS = 220;

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const fadeTimeoutRef = useRef(null);

  const total = certifications.length;

  useEffect(() => {
    certifications.forEach((c) => {
      if (c.image) {
        const img = new window.Image();
        img.src = `${import.meta.env.BASE_URL}certs/${c.image}`;
      }
    });
  }, []);

  function advanceBy(step) {
    clearTimeout(fadeTimeoutRef.current);
    setFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setIndex((i) => ((i + step) % total + total) % total);
      setFading(false);
    }, FADE_MS);
  }

  function goTo(targetIndex) {
    clearTimeout(fadeTimeoutRef.current);
    setFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setIndex(((targetIndex % total) + total) % total);
      setFading(false);
    }, FADE_MS);
  }

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => advanceBy(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  useEffect(() => () => clearTimeout(fadeTimeoutRef.current), []);

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
        <button className="cert-nav cert-nav-prev" onClick={() => advanceBy(-1)} aria-label="Previous certification">
          &#8249;
        </button>

        <div className={`cert-slide${current.highlight ? " cert-slide-highlight" : ""}${fading ? " cert-slide-fading" : ""}`}>
          {current.highlight && <span className="cert-highlight-badge">Featured</span>}
          <div className="cert-slide-image-frame">
            {current.image ? (
              <img
                className="cert-slide-image"
                src={`${import.meta.env.BASE_URL}certs/${current.image}`}
                alt={current.name}
              />
            ) : (
              <div className="cert-slide-placeholder">
                <span className="cert-slide-initial">{current.issuer.slice(0, 1)}</span>
              </div>
            )}
          </div>
          <h4>{current.name}</h4>
          <p className="cert-issuer">{current.issuer}</p>
          <p className="cert-date">{current.date}</p>
        </div>

        <button className="cert-nav cert-nav-next" onClick={() => advanceBy(1)} aria-label="Next certification">
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

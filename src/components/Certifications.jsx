import { useEffect, useRef, useState } from "react";
import { certifications } from "../data/certifications";

const AUTO_ADVANCE_MS = 2000;
const SLIDE_MS = 420;

function Slide({ c }) {
  return (
    <div className={`cert-slide${c.highlight ? " cert-slide-highlight" : ""}`}>
      {c.highlight && <span className="cert-highlight-badge">Featured</span>}
      <div className="cert-slide-image-frame">
        {c.image ? (
          <img
            className="cert-slide-image"
            src={`${import.meta.env.BASE_URL}certs/${c.image}`}
            alt={c.name}
          />
        ) : (
          <div className="cert-slide-placeholder">
            <span className="cert-slide-initial">{c.issuer.slice(0, 1)}</span>
          </div>
        )}
      </div>
      <h4>{c.name}</h4>
      <p className="cert-issuer">{c.issuer}</p>
      <p className="cert-date">{c.date}</p>
    </div>
  );
}

export default function Certifications() {
  const total = certifications.length;
  const slides = [certifications[total - 1], ...certifications, certifications[0]];

  const [virtual, setVirtual] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const snapTimeoutRef = useRef(null);

  useEffect(() => {
    certifications.forEach((c) => {
      if (c.image) {
        const img = new window.Image();
        img.src = `${import.meta.env.BASE_URL}certs/${c.image}`;
      }
    });
  }, []);

  function step(delta) {
    setWithTransition(true);
    setVirtual((v) => v + delta);
  }

  function goTo(realIndex) {
    setWithTransition(true);
    setVirtual(realIndex + 1);
  }

  useEffect(() => {
    clearTimeout(snapTimeoutRef.current);
    snapTimeoutRef.current = setTimeout(() => {
      if (virtual === 0) {
        setWithTransition(false);
        setVirtual(total);
      } else if (virtual === total + 1) {
        setWithTransition(false);
        setVirtual(1);
      }
    }, SLIDE_MS);
    return () => clearTimeout(snapTimeoutRef.current);
  }, [virtual, total]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => step(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const realIndex = (((virtual - 1) % total) + total) % total;

  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">{total} certifications, sliding automatically. Use the arrows or dots to jump ahead.</p>
      <div
        className="cert-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="cert-nav" onClick={() => step(-1)} aria-label="Previous certification">
          &#8249;
        </button>

        <div className="cert-viewport">
          <div
            className="cert-track"
            style={{
              transform: `translateX(-${virtual * 100}%)`,
              transition: withTransition ? `transform ${SLIDE_MS}ms ease` : "none",
            }}
          >
            {slides.map((c, i) => (
              <Slide c={c} key={i} />
            ))}
          </div>
        </div>

        <button className="cert-nav" onClick={() => step(1)} aria-label="Next certification">
          &#8250;
        </button>
      </div>
      <div className="cert-dots">
        {certifications.map((c, i) => (
          <button
            key={c.name}
            className={`cert-dot${i === realIndex ? " cert-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${c.name}`}
          />
        ))}
      </div>
    </section>
  );
}

import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">Scroll sideways to see them all.</p>
      <div className="cert-carousel">
        {certifications.map((c) => (
          <div className="cert-card" key={c.name}>
            <div className="cert-badge" aria-hidden="true">
              {c.issuer.slice(0, 1)}
            </div>
            <h4>{c.name}</h4>
            <p className="cert-issuer">{c.issuer}</p>
            <p className="cert-date">{c.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

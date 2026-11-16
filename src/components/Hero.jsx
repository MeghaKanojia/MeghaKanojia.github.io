export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <img
          className="hero-photo"
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Megha Kanojia"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <h1 className="hero-title">Hello World!</h1>
        <p className="hero-subtitle">I'm Megha Kanojia &mdash; Data Analyst &amp; AI Engineer</p>
        <p className="hero-bio">
          I believe the most useful thing I can bring to a team is a willingness to keep learning on
          the go. I pick up new technologies by building something real with them, I'm genuinely
          curious about how things work underneath, and I do my best work collaborating across
          engineering, data, and business teams rather than in a silo.
        </p>
        <div className="hero-traits">
          <span className="trait-chip">Growth Mindset</span>
          <span className="trait-chip">Continuous Learning</span>
          <span className="trait-chip">Curious About New Tech</span>
          <span className="trait-chip">Cross-Functional Collaboration</span>
        </div>
        <div className="hero-links">
          <a className="btn btn-primary" href="mailto:kanojiamegha326@gmail.com">Email Me</a>
          <a className="btn" href="https://www.linkedin.com/in/megha-kanojia-bb3662192/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="https://github.com/MeghaKanojia" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Resume (PDF)</a>
        </div>
      </div>
    </header>
  );
}

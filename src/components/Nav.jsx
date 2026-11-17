const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#other-projects", label: "Other Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        {LINKS.map((l) => (
          <a className="topnav-link" href={l.href} key={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

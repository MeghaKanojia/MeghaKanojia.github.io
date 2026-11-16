import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import "./App.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="page">
      <nav className="topnav">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </nav>
      <Hero />
      <main>
        <Education />
        <Experience />
        <Skills />
        <FeaturedProjects />
        <OtherProjects />
      </main>
      <Footer />
    </div>
  );
}

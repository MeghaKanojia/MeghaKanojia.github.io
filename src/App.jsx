import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <FeaturedProjects />
        <OtherProjects />
      </main>
      <Footer />
    </div>
  );
}

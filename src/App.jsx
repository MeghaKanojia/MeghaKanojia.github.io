import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <main>
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

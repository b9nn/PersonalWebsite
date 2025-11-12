import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// ===========================================
// HOME PAGE
// ===========================================
// Main landing page with all sections
// Structure: Navigation → Hero → About → Experience → Skills → Projects → Contact

export default function Home() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navigation />

      {/* Main content */}
      <main className="bg-white dark:bg-black">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

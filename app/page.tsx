import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// ===========================================
// HOME PAGE
// ===========================================
// Main landing page with all sections
// Structure: Navigation → Hero → Projects → Contact

export default function Home() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navigation />

      {/* Main content */}
      <main className="bg-white dark:bg-black">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

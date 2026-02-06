import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootSequence from "./components/BootSequence";

export default function Home() {
  return (
    <>
      {/* Boot sequence animation */}
      <BootSequence />

      {/* Rain overlay - sits on top of everything */}
      <div className="rain-overlay">
        <video autoPlay muted loop playsInline>
          <source src="/videos/rain-overlay.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scanlines effect */}
      <div className="scanlines" />

      {/* Film grain texture */}
      <div className="film-grain" />

      {/* VHS tracking distortion - occasional subtle glitch */}
      <div className="vhs-tracking--overlay" />

      {/* Fixed navigation bar */}
      <Navigation />

      {/* Main content */}
      <main className="bg-void vhs-tracking">
        <Hero />
        <div className="atmospheric-haze" aria-hidden="true" />
        <About />
        <div className="atmospheric-haze atmospheric-haze--warm" aria-hidden="true" />
        <Experience />
        <div className="atmospheric-haze" aria-hidden="true" />
        <Projects />
        <div className="atmospheric-haze atmospheric-haze--warm" aria-hidden="true" />
        <Contact />
      </main>
    </>
  );
}

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

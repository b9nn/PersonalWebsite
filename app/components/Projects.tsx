'use client';

import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { SECTION_CONTENT } from '../data/constants';
import ProjectCard from './ProjectCard';

// ===========================================
// PROJECTS COMPONENT
// ===========================================
// Displays grid of project cards with animations
// Projects are loaded from ../data/projects.ts
// Optional: Uncomment filtering code below to enable category filtering

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ===========================================
  // OPTIONAL: Category Filtering
  // ===========================================
  // Uncomment this code to enable project filtering by category
  /*
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);
  */

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-zinc-50 dark:bg-zinc-900"
      aria-labelledby="projects-heading"
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto fade-in-on-scroll">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {SECTION_CONTENT.projects.heading}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {SECTION_CONTENT.projects.description}
          </p>
        </div>

        {/* ===========================================
            OPTIONAL: Category Filter Buttons
            =========================================== */}
        {/* Uncomment to enable filtering
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        */}

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Project count indicator */}
        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </section>
  );
}

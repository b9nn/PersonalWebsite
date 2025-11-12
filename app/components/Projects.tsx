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

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-zinc-50 dark:bg-zinc-950"
      aria-labelledby="projects-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10 fade-in-on-scroll">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {SECTION_CONTENT.projects.heading}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {SECTION_CONTENT.projects.description}
          </p>
        </div>

        {/* Project cards grid with animation - 2 columns */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

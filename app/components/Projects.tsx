'use client';

import { useEffect, useRef } from 'react';
import { featuredProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      id="memory-archive"
      className="relative min-h-screen px-6 py-32 section-deep anamorphic-streak neon-reflect--magenta"
      aria-labelledby="projects-heading"
    >
      {/* Single ambient glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-magenta/3 top-1/4 left-0" />

      {/* Floating neon signage - distant urban atmosphere */}
      <div
        className="absolute top-1/4 right-0 w-[320px] h-[550px] pointer-events-none z-[1] opacity-[0.75] mix-blend-screen hidden lg:block"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/chinese_lettering.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6) contrast(1.3) saturate(1.4)',
          maskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)',
        }}
      />

      <div ref={sectionRef} className="max-w-5xl mx-auto relative z-10 fade-in-on-scroll">
        {/* Section header */}
        <div className="mb-20">
          <span className="terminal-text text-xs tracking-[0.2em] uppercase block mb-4">
            // memory.archive.access
          </span>
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-extralight text-text-primary mb-6"
          >
            Memory Archive
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            Recovered data fragments from previous constructs. Each memory represents a unique solution to complex problems.
          </p>
        </div>

        {/* Project cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16">
          <span className="terminal-text text-xs">// end_of_archive</span>
        </div>
      </div>
    </section>
  );
}

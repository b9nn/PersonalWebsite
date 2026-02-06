'use client';

import { useEffect, useRef } from 'react';
import { featuredProjects } from '../data/projects';
import { PERSONAL_INFO } from '../data/constants';
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

        {/* Footer with GitHub link */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-replicant"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Full Archive
            </span>
          </a>
          <span className="terminal-text text-xs">// end_of_archive</span>
        </div>
      </div>
    </section>
  );
}

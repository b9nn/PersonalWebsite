'use client';

import { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/skills';
import { SECTION_CONTENT } from '../data/constants';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

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
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 section-gradient fade-in-on-scroll"
    >
      {/* Fog layer */}
      <div className="fog-layer opacity-20" />

      {/* Single ambient glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan/3 top-1/3 right-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-text-primary mb-6">
            {SECTION_CONTENT.skills.heading}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            {SECTION_CONTENT.skills.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 stagger-children">
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === index;

            return (
              <div
                key={index}
                className={`cyber-card group p-8 rounded-cyber transition-all duration-700 ${
                  isActive ? 'border-cyan' : ''
                }`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-light text-text-primary group-hover:text-cyan transition-colors duration-700">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs border border-muted text-text-dim rounded hover:border-cyan hover:text-cyan transition-all duration-700 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-20 flex flex-col sm:flex-row gap-4">
          <a
            href="#memory-archive"
            className="btn-replicant inline-flex items-center gap-3"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#experience"
            className="btn-replicant btn-replicant-amber inline-flex items-center gap-3"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { EDUCATION, SECTION_CONTENT } from '../data/constants';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 section-gradient fade-in-on-scroll anamorphic-streak dust-particles"
    >
      {/* Fog layer */}
      <div className="fog-layer opacity-30" />

      {/* Single ambient glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan/3 top-1/4 right-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-text-primary mb-6">
            {SECTION_CONTENT.about.heading}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            {SECTION_CONTENT.about.description}
          </p>
        </div>

        {/* Education Card */}
        <div className="cyber-card p-8 rounded-cyber mb-12 relative">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-text-primary mb-2">
              {EDUCATION.degree}
            </h3>
            <p className="text-cyan">{EDUCATION.school}</p>
            <p className="text-text-dim text-sm mt-1">{EDUCATION.duration}</p>
          </div>

          {/* Courses */}
          <div className="mb-8">
            <h4 className="text-xs text-text-dim uppercase tracking-wider mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {EDUCATION.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs border border-muted text-text-secondary rounded hover:border-cyan hover:text-cyan transition-all duration-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Extracurriculars */}
          <div>
            <h4 className="text-xs text-text-dim uppercase tracking-wider mb-4">Activities</h4>
            <ul className="space-y-2">
              {EDUCATION.extracurriculars.map((activity, index) => (
                <li
                  key={index}
                  className="text-sm text-text-secondary"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

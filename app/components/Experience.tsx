'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '../data/experience';
import { SECTION_CONTENT } from '../data/constants';

export default function Experience() {
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
      const items = sectionRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 px-6 section-deep fade-in-on-scroll neon-reflect--amber dust-particles"
    >
      {/* Fog layer */}
      <div className="fog-layer opacity-20" />

      {/* Single ambient glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan/3 top-0 right-1/4" />

      {/* Warm neon atmosphere - distant street-level glow */}
      <div
        className="absolute bottom-0 left-0 w-[320px] h-[500px] pointer-events-none z-[0] opacity-[1.50] mix-blend-screen hidden lg:block"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/neon_sign.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          filter: 'brightness(0.5) contrast(1.2) hue-rotate(-5deg)',
          maskImage: 'radial-gradient(ellipse at bottom left, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at bottom left, black 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <span className="terminal-text text-xs tracking-[0.2em] uppercase block mb-3">
            // employment.records
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-text-primary">
            {SECTION_CONTENT.experience.heading}
          </h2>
        </div>

        {/* Experience Items */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item fade-in-on-scroll"
            >

                {/* Content Card */}
                <div className="cyber-card p-5 rounded-cyber">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-light text-text-primary">
                          {exp.position}
                        </h3>
                        {exp.company === 'Practice Better' && (
                          <span className="px-2 py-0.5 text-[10px] border border-amber text-amber rounded">
                            Incoming
                          </span>
                        )}
                      </div>
                      <p className="text-cyan text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-text-dim shrink-0">
                      <div>{exp.duration}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  {/* Description Points */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-xs text-text-secondary leading-relaxed"
                      >
                        <span className="text-amber flex-shrink-0">{'>'}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies - inline */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] border border-cyan-dim text-text-dim rounded hover:border-cyan hover:text-cyan transition-all duration-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

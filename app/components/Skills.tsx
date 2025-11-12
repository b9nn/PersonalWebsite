'use client';

import { useEffect, useRef, useState } from 'react';
import { skillCategories, skillColors } from '../data/skills';
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

  const getSkillColor = (skill: string) => {
    return skillColors[skill] || skillColors.default;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 fade-in-on-scroll"
    >
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {SECTION_CONTENT.skills.heading}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {SECTION_CONTENT.skills.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 stagger-children">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft hover:shadow-soft-lg transition-all duration-500 ${
                activeCategory === index ? 'ring-2 ring-blue-500 scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.category}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-glow cursor-default ${getSkillColor(
                      skill
                    )}`}
                    style={{
                      animationDelay: `${skillIndex * 0.05}s`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Want to see these skills in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 hover:shadow-glow-lg transition-all duration-300"
            >
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

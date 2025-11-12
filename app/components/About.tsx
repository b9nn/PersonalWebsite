'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL_INFO, EDUCATION, SECTION_CONTENT } from '../data/constants';

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
      className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden fade-in-on-scroll"
    >
      {/* Animated background blob */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {SECTION_CONTENT.about.heading}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {SECTION_CONTENT.about.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Bio */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
              Nice to meet you!
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Currently pursuing {EDUCATION.degree} at {EDUCATION.school}, I'm passionate about
              leveraging data science and machine learning to solve real-world problems.
            </p>
          </div>

          {/* Right Column - Education */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {EDUCATION.school}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {EDUCATION.duration}
                </p>
              </div>
            </div>

            {/* Notable Courses */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                Notable Courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.courses.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Extracurriculars */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                Extracurriculars
              </h4>
              <ul className="space-y-2">
                {EDUCATION.extracurriculars.map((activity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-blue-500">▸</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Get In Touch - Full Width Centered */}
        <div className="w-full">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 text-center">
            <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
              </a>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

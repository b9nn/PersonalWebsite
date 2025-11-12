'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/constants';

// ===========================================
// HERO COMPONENT
// ===========================================
// Landing section with introduction and CTA buttons
// Features fade-in animations and gradient text
// Customize content in ../data/constants.ts

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add visible class for animations after component mounts
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        ref={heroRef}
        className="max-w-4xl mx-auto text-center stagger-children"
      >
        {/* Main heading with gradient text */}
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent will-animate"
        >
          Hi, I'm {PERSONAL_INFO.name}
        </h1>

        {/* Job title/subtitle */}
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-8 font-medium will-animate">
          {PERSONAL_INFO.title}
        </p>

        {/* Description/tagline */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed will-animate">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Call-to-action buttons */}
        <div className="flex gap-4 justify-center flex-wrap will-animate">
          {/* Primary CTA - View Projects */}
          <a
            href="#projects"
            className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="View my projects"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>

          {/* Secondary CTA - GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full font-medium transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Visit my GitHub profile"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

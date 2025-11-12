'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL_INFO, SECTION_CONTENT } from '../data/constants';

// ===========================================
// CONTACT COMPONENT
// ===========================================
// Contact section with social links and footer
// Customize contact info in ../data/constants.ts

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      aria-labelledby="contact-heading"
    >
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto text-center fade-in-on-scroll"
      >
        {/* Section header */}
        <h2
          id="contact-heading"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {SECTION_CONTENT.contact.heading}
        </h2>

        {/* Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {SECTION_CONTENT.contact.description}
        </p>

        {/* Contact links */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          {/* GitHub link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            aria-label="Visit my GitHub profile"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform"
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
            <span className="font-medium">GitHub</span>
          </a>

          {/* Email link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-3 px-6 py-3 border-2 border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label={`Send email to ${PERSONAL_INFO.email}`}
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>

        {/* Footer */}
        <footer
          className="text-sm text-zinc-500 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-8"
          role="contentinfo"
        >
          <p className="mb-2">
            Built with Next.js & Tailwind CSS + Claude Code :)
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

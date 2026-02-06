'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL_INFO, SECTION_CONTENT } from '../data/constants';

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
      className="relative min-h-screen flex items-center justify-center px-6 py-32 section-void overflow-hidden dust-particles neon-reflect--street"
      aria-labelledby="contact-heading"
    >
      {/* Single ambient glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyan/3 bottom-1/4 right-1/4" />

      {/* Fog layer */}
      <div className="fog-layer opacity-30" />

      <div
        ref={sectionRef}
        className="max-w-3xl mx-auto text-center fade-in-on-scroll relative z-10"
      >
        {/* Section header */}
        <span className="terminal-text text-xs tracking-[0.2em] uppercase block mb-6">
          // establish.connection
        </span>
        <h2
          id="contact-heading"
          className="text-4xl md:text-6xl font-extralight text-text-primary mb-8"
        >
          {SECTION_CONTENT.contact.heading}
        </h2>

        <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed mb-16">
          {SECTION_CONTENT.contact.description}
        </p>

        {/* Contact links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-20">
          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card group p-8 rounded-cyber text-center"
            aria-label="Visit my LinkedIn profile"
          >
            <svg
              className="w-7 h-7 mx-auto mb-4 text-text-dim group-hover:text-cyan transition-all duration-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm text-text-secondary group-hover:text-cyan transition-colors duration-700">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card group p-8 rounded-cyber text-center"
            aria-label="Visit my GitHub profile"
          >
            <svg
              className="w-7 h-7 mx-auto mb-4 text-text-dim group-hover:text-amber transition-all duration-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-text-secondary group-hover:text-amber transition-colors duration-700">
              GitHub
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="cyber-card group p-8 rounded-cyber text-center"
            aria-label={`Send email to ${PERSONAL_INFO.email}`}
          >
            <svg
              className="w-7 h-7 mx-auto mb-4 text-text-dim group-hover:text-magenta transition-all duration-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-text-secondary group-hover:text-magenta transition-colors duration-700">
              Email
            </span>
          </a>
        </div>

        {/* Blade Runner Footer */}
        <footer className="pt-8 border-t border-muted" role="contentinfo">
          {/* Gaff's origami unicorn */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/oragami.png"
              alt=""
              className="w-10 h-10 opacity-25 hover:opacity-70 transition-opacity duration-[2400ms]"
              aria-hidden="true"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.2))' }}
            />
          </div>

          <p className="text-xs text-text-dim tracking-[0.15em] uppercase mb-2">
            More human than human
          </p>
          <p className="terminal-text text-xs">
            &gt; connection.status: <span className="text-cyan">ONLINE</span>
          </p>
        </footer>
      </div>
    </section>
  );
}

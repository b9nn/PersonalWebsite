'use client';

import { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/constants';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dust-particles neon-reflect--street"
      aria-labelledby="hero-heading"
    >
      {/* Video Background */}
      <div className="video-bg-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg"
          onLoadedData={() => setVideoLoaded(true)}
          poster="/images/cityscape.png"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-void via-deep to-void" />
        )}
      </div>

      {/* Cityscape silhouette layer */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none">
        <img
          src="/images/cityscape.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto opacity-20 object-cover object-bottom"
          style={{ filter: 'brightness(0.4) contrast(1.2)' }}
        />
      </div>

      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[3] pointer-events-none bg-gradient-to-t from-[var(--void)] via-[var(--void)]/60 to-transparent" />

      {/* Fog layer */}
      <div className="fog-layer opacity-60" />

      {/* Single ambient glow - subtle */}
      <div className="glow-orb w-[800px] h-[800px] bg-cyan/3 top-1/4 left-1/3" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center stagger-children"
      >
        {/* Location marker */}
        <div className="mb-8 opacity-0">
          <span className="terminal-text text-xs tracking-[0.3em] uppercase">
            Los Angeles 2049
          </span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 opacity-0"
        >
          <span className="block text-text-primary">
            {PERSONAL_INFO.name}
          </span>
          <span className="block text-text-secondary text-xl md:text-2xl lg:text-3xl mt-6 font-light tracking-wide">
            {PERSONAL_INFO.title}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-text-dim max-w-xl mx-auto leading-relaxed mb-16 opacity-0">
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center opacity-0">
          <a
            href="#memory-archive"
            className="btn-replicant"
            aria-label="View projects"
          >
            Access Memory Archive
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-replicant btn-replicant-amber"
            aria-label="GitHub profile"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </span>
          </a>
        </div>

      </div>

      {/* Scroll indicator - positioned at bottom of viewport */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 stagger-children">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-text-dim hover:text-text-secondary transition-colors duration-1000"
          aria-label="Scroll to about section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

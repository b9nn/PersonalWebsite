'use client';

import { useEffect, useState } from 'react';

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [showFlash, setShowFlash] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if boot sequence has played this session
    const played = sessionStorage.getItem('bootPlayed');
    if (played) {
      setShow(false);
      setHasPlayed(true);
      return;
    }

    // Trigger white flash before hiding
    const flashTimer = setTimeout(() => {
      setShowFlash(true);
    }, 5200);

    // Hide after animation completes
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('bootPlayed', 'true');
    }, 6200);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(timer);
    };
  }, []);

  if (hasPlayed || !show) return null;

  return (
    <>
      <div className={`boot-sequence ${showFlash ? 'boot-flash-out' : ''}`}>
        {/* Horizontal scanline sweep */}
        <div className="boot-scanline" />

        {/* Tyrell Corp logo intro */}
        <div className="boot-logo">
          <span className="boot-logo-text">TYRELL CORP</span>
          <span className="boot-logo-sub">NEXUS-9 NEURAL INTERFACE</span>
        </div>

        {/* Boot lines */}
        <div className="text-left max-w-md space-y-1 boot-lines-container">
          <p className="boot-line">[SYSTEM] Initializing NEXUS-9 interface...</p>
          <p className="boot-line">[MEMORY] Loading neural pathways...</p>
          <p className="boot-line">[DISPLAY] Calibrating holographic display...</p>
          <p className="boot-line">[NETWORK] Establishing secure connection...</p>
          <p className="boot-line">[AUTH] Verifying baseline status...</p>
          <p className="boot-line">[STATUS] All systems nominal</p>
          <p className="boot-line">&gt; USER ACCEPTED_</p>
        </div>
      </div>

    </>
  );
}

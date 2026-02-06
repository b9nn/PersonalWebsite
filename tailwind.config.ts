import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Blade Runner 2049 Color Palette
      colors: {
        // Base dark colors
        void: "#030305",
        abyss: "#070810",
        deep: "#0c0e15",
        surface: "#12151d",
        muted: "#1a1d28",

        // Neon accents
        cyan: {
          DEFAULT: "#00d4ff",
          dim: "rgba(0, 212, 255, 0.15)",
          glow: "rgba(0, 212, 255, 0.4)",
        },
        amber: {
          DEFAULT: "#ff9f1c",
          dim: "rgba(255, 159, 28, 0.15)",
          glow: "rgba(255, 159, 28, 0.4)",
        },
        magenta: {
          DEFAULT: "#ff2d6a",
          dim: "rgba(255, 45, 106, 0.15)",
          glow: "rgba(255, 45, 106, 0.4)",
        },

        // Text hierarchy
        "text-primary": "#e8e6e3",
        "text-secondary": "#9ca3af",
        "text-dim": "#5c6370",
      },

      // Cinematic animations
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-in-up": "fadeInUp 1.2s ease-out forwards",
        "slide-in-left": "slideInLeft 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 1.2s ease-out forwards",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "fog-drift": "fogDrift 20s ease-in-out infinite",
        "holo-shift": "holoShift 8s linear infinite",
        "scan": "scan 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "grain": "grain 0.5s steps(1) infinite",
        "slow-float": "slowFloat 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
        fogDrift: {
          "0%, 100%": { opacity: "0.8", transform: "translateX(0)" },
          "50%": { opacity: "1", transform: "translateX(2%)" },
        },
        holoShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "20%": { transform: "translate(1%, 1%)" },
          "30%": { transform: "translate(-1%, 1%)" },
          "40%": { transform: "translate(1%, -1%)" },
        },
        slowFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      // Cinematic transition timings
      transitionDuration: {
        "slow": "800ms",
        "cinematic": "1200ms",
      },

      // Typography
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },

      // Blade Runner shadows
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 212, 255, 0.3)",
        "neon-cyan-lg": "0 0 40px rgba(0, 212, 255, 0.4)",
        "neon-amber": "0 0 20px rgba(255, 159, 28, 0.3)",
        "neon-amber-lg": "0 0 40px rgba(255, 159, 28, 0.4)",
        "neon-magenta": "0 0 20px rgba(255, 45, 106, 0.3)",
        "inner-glow": "inset 0 0 30px rgba(0, 0, 0, 0.5)",
      },

      // Backdrop blur
      backdropBlur: {
        xs: "2px",
        heavy: "20px",
      },

      // Border radius (sharp, retro-futuristic)
      borderRadius: {
        cyber: "4px",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      // Custom color palette for brand consistency
      colors: {
        brand: {
          primary: "#2563eb", // blue-600
          secondary: "#9333ea", // purple-600
          accent: "#0ea5e9", // sky-500
        },
      },
      // Custom animation definitions
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      // Enhanced typography scale
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-sm": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      // Custom spacing for consistency
      spacing: {
        "18": "4.5rem",
        "112": "28rem",
        "128": "32rem",
      },
      // Enhanced shadows for depth
      boxShadow: {
        "soft": "0 2px 15px rgba(0, 0, 0, 0.05)",
        "soft-lg": "0 10px 40px rgba(0, 0, 0, 0.1)",
        "glow": "0 0 20px rgba(37, 99, 235, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

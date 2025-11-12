// ===========================================
// SITE CONSTANTS
// ===========================================
// Centralized configuration for your portfolio site

// Personal Information
// ------------------------------------
// Update these with your information
export const PERSONAL_INFO = {
  name: "Ben",
  fullName: "Benjamin Gladney",
  title: "Data Scientist & Software Engineer",
  tagline: "I build projects spanning machine learning, computational research, and web development. Passionate about solving complex problems with elegant solutions.",
  email: "bgladney@uwaterloo.ca",
  phone: "+1-437-388-5855",
  github: "https://github.com/b9nn",
  githubUsername: "b9nn",
  linkedin: "https://linkedin.com/in/benjamin-gladney"
} as const;

// Education Information
// ------------------------------------
export const EDUCATION = {
  degree: "Honours Data Science, BMath",
  school: "University of Waterloo",
  duration: "Sep. 2024 - May 2029 (Expected)",
  location: "Waterloo, ON",
  courses: [
    "Data Structures and Algorithms",
    "Object-Oriented Software Development",
    "Logic and Computation",
    "Designing Functional Programs",
    "Linear Algebra",
    "Calculus"
  ],
  extracurriculars: [
    "Data Science Club",
    "Applied Math, C&O Club",
    "Various Hackathons + Datathons"
  ]
} as const;

// Navigation Links
// ------------------------------------
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
] as const;

// Programming Language Colors
// ------------------------------------
// Colors for language badges in project cards
export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "bg-blue-500",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  "C++": "bg-pink-500",
  NetLogo: "bg-red-500",
  PowerShell: "bg-blue-600",
  "Python + TypeScript": "bg-gradient-to-r from-blue-500 to-blue-400"
} as const;

// Project Categories
// ------------------------------------
// Available categories for filtering projects
export const PROJECT_CATEGORIES = [
  "All",
  "Machine Learning",
  "Web Development",
  "Full Stack",
  "Research",
  "Simulation",
  "Utilities"
] as const;

// Section Content
// ------------------------------------
// Customize section headings and descriptions
export const SECTION_CONTENT = {
  about: {
    heading: "About Me",
    description: "Data Science student at the University of Waterloo with a passion for machine learning, web development, and solving complex problems."
  },
  experience: {
    heading: "Experience",
    description: "Professional work experience in data science, machine learning, and research"
  },
  skills: {
    heading: "Skills & Technologies",
    description: "Technical skills and tools I work with"
  },
  projects: {
    heading: "Projects",
    description: "A collection of my work in machine learning, web development, and research"
  },
  contact: {
    heading: "Get In Touch",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
  }
} as const;

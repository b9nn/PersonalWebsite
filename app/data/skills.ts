export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL", "Bash", "DAX"],
    icon: "💻"
  },
  {
    category: "Software & Tools",
    skills: ["Azure", "Node.js", "Hugging Face", "DataBricks", "PowerBI", "Excel", "Linux", "Git", "PowerApps", "APIFY"],
    icon: "🛠️"
  },
  {
    category: "Libraries & Frameworks",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "Django", "React", "Flask", "Pandas", "NumPy", "Matplotlib", "Torchvision", "SQLite"],
    icon: "📚"
  },
  {
    category: "Interpersonal Skills",
    skills: ["Public Speaking", "Collaboration", "Leadership", "Presentations", "Time Management", "Adaptability"],
    icon: "🤝"
  }
];

// Consistent colors for all skills
export const skillColors: Record<string, string> = {
  // Default for all skills - consistent neutral styling
  "default": "text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
};

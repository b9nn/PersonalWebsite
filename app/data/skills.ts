export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL", "Bash", "R", "DAX"],
    icon: "💻"
  },
  {
    category: "Software & Tools",
    skills: ["AWS", "Docker", "PostgreSQL/PostGIS", "Redis", "Celery", "Azure", "Azure OpenAI", "Node.js", "MongoDB", "DataBricks", "PowerBI", "Linux", "Git", "Claude Code", "Cursor", "MCP"],
    icon: "🛠️"
  },
  {
    category: "Libraries & Frameworks",
    skills: ["FastAPI", "React", "deck.gl", "MapLibre", "PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "Django", "Flask", "Pandas", "NumPy", "Matplotlib"],
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

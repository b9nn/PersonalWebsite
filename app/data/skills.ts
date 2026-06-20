export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Rust", "JavaScript", "TypeScript", "C++", "C", "Java", "Ruby", "SQL", "Bash", "R"],
    icon: "💻"
  },
  {
    category: "Software & Tools",
    skills: ["AWS", "Azure", "Azure OpenAI", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "Jira", "DataBricks", "Supabase", "Cloudflare R2", "PostgreSQL/PostGIS", "MongoDB", "Redis", "Celery", "Node.js", "PowerBI", "Linux", "Git", "Claude Code", "Cursor", "MCP"],
    icon: "🛠️"
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Next.js", "React", "FastAPI", "Django", "Flask", "Rails", ".NET", "Spark", "Playwright", "PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "deck.gl", "MapLibre", "Pandas", "NumPy", "Matplotlib"],
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

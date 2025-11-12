import { Project } from "../data/projects";
import { LANGUAGE_COLORS } from "../data/constants";

// ===========================================
// PROJECT CARD COMPONENT
// ===========================================
// Reusable card component for displaying individual projects
// Includes hover effects, external link icon, and language badges

interface ProjectCardProps {
  project: Project;
  index?: number; // For staggered animation delays
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Get the language color, fallback to gray if not defined
  const languageColor = LANGUAGE_COLORS[project.language] || "bg-zinc-400";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-soft-lg will-animate"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`View ${project.name} on GitHub`}
    >
      {/* Header with title and external link icon */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.name}
        </h3>

        {/* External link icon */}
        <svg
          className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      {/* Project description with line clamping */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      {/* Metadata badges: language, stars, category */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Language badge with colored dot */}
        {project.language && (
          <span className="flex items-center gap-1.5 text-xs" aria-label={`Written in ${project.language}`}>
            <span
              className={`w-3 h-3 rounded-full ${languageColor}`}
              aria-hidden="true"
            />
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">
              {project.language}
            </span>
          </span>
        )}

        {/* GitHub stars (if available) */}
        {project.stars && (
          <span
            className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400"
            aria-label={`${project.stars} stars on GitHub`}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.stars}
          </span>
        )}

        {/* Category badge */}
        <span className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full font-medium">
          {project.category}
        </span>
      </div>
    </a>
  );
}

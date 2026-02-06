import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const getLanguageColor = () => {
    const lang = project.language?.toLowerCase();
    if (lang?.includes('python')) return 'bg-cyan';
    if (lang?.includes('typescript') || lang?.includes('javascript')) return 'bg-amber';
    if (lang?.includes('rust') || lang?.includes('go')) return 'bg-magenta';
    return 'bg-text-dim';
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cyber-card group block p-6 rounded-cyber"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`View ${project.name} on GitHub`}
    >
      {/* Memory index label */}
      <div className="mb-4 pb-2 border-b border-cyan-dim">
        <span className="font-mono text-[10px] tracking-[0.25em] text-text-dim/50 uppercase">
          MEM_{String(index + 1).padStart(3, '0')}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-light text-text-primary group-hover:text-cyan transition-colors duration-500">
            {project.name}
          </h3>
        </div>

        <svg
          className="w-4 h-4 text-text-dim group-hover:text-cyan transition-colors duration-500 flex-shrink-0 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 border border-cyan-dim text-text-dim rounded-cyber hover:border-cyan hover:text-cyan transition-all duration-500"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 text-text-dim">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-cyan-dim">
        {/* Language */}
        {project.language && (
          <span className="flex items-center gap-2 text-xs" aria-label={`Written in ${project.language}`}>
            <span
              className={`w-2 h-2 rounded-full ${getLanguageColor()}`}
              aria-hidden="true"
            />
            <span className="text-text-dim">
              {project.language}
            </span>
          </span>
        )}

        {/* Stars */}
        {project.stars && (
          <span
            className="flex items-center gap-1 text-xs text-text-dim"
            aria-label={`${project.stars} stars on GitHub`}
          >
            <svg className="w-3 h-3 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.stars}
          </span>
        )}

        {/* Category */}
        <span className="text-xs px-2 py-0.5 border border-amber-dim text-amber rounded-cyber">
          {project.category}
        </span>
      </div>
    </a>
  );
}

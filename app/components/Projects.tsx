const projects = [
  {
    name: "FluidFlow",
    description: "Machine-learning regression model that predicts key acoustic outputs of various vocal fold models",
    language: "Python",
    url: "https://github.com/b9nn/FluidFlow",
    category: "Machine Learning"
  },
  {
    name: "TitanicML",
    description: "Predicting the survival of passengers aboard the Titanic using machine learning",
    language: "Python",
    url: "https://github.com/b9nn/TitanicML",
    stars: 1,
    category: "Machine Learning"
  },
  {
    name: "Deep Image Classifier",
    description: "Deep learning image classification using PyTorch on the CIFAR-10 dataset",
    language: "Python",
    url: "https://github.com/b9nn/CIFAR10-PyTorch",
    category: "Machine Learning"
  },
  {
    name: "IMBD Review Classifier",
    description: "Natural language processing model for sentiment analysis and classification",
    language: "Python",
    url: "https://github.com/b9nn/SentimentClassifier_NLP",
    category: "Machine Learning"
  },
  {
    name: "ExoAI",
    description: "Web application for exploring and visualizing exoplanet data",
    language: "TypeScript",
    url: "https://github.com/b9nn/HuntingExoPlanets",
    category: "Web Development"
  },
  {
    name: "MealMinder",
    description: "Grocery Planning Tool",
    language: "Python + TypeScript",
    url: "https://github.com/b9nn/MealMinder",
    category: "Full Stack"
  },
  {
    name: "TBCM",
    description: "Triangular Body Cover Model of the Vocal Folds",
    language: "Python",
    url: "https://github.com/b9nn/TBCM",
    category: "Research"
  },
  {
    name: "Turtle Flight",
    description: "Models planes flying to destinations while avoiding collisions, with gas mechanics implemented",
    language: "NetLogo",
    url: "https://github.com/b9nn/flight_model",
    category: "Simulation"
  },
  {
    name: "FamilyTree",
    description: "Interactive family tree web application",
    language: "JavaScript",
    url: "https://github.com/b9nn/GladneyFamilyTree",
    category: "Web Development"
  },
  {
    name: "VTU2CSV",
    description: "Converts VTU files to CSV format for data analysis",
    language: "Python",
    url: "https://github.com/b9nn/vtu_to_csv_conversion",
    category: "Utilities"
  }
];

const languageColors: Record<string, string> = {
  Python: "bg-blue-500",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  "C++": "bg-pink-500",
  NetLogo: "bg-red-500",
  PowerShell: "bg-blue-600"
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
          A collection of my work in machine learning, web development, and research
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <svg
                  className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                {project.language && (
                  <span className="flex items-center gap-1.5 text-xs">
                    <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-zinc-400"}`}></span>
                    <span className="text-zinc-600 dark:text-zinc-400">{project.language}</span>
                  </span>
                )}
                {project.stars && (
                  <span className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.stars}
                  </span>
                )}
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

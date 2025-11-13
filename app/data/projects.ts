// ===========================================
// PROJECTS DATA
// ===========================================
// Customize your projects here. Each project should have:
// - name: Project title
// - description: Brief description (keep to 2-3 lines for best display)
// - language: Programming language(s) used
// - url: GitHub or project URL
// - category: One of: "Machine Learning", "Web Development", "Full Stack", "Research", "Simulation", "Utilities"
// - stars: (optional) GitHub star count to display

export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  category: string;
  stars?: number;
  technologies?: string[];
  achievements?: string[];
}

export const projects: Project[] = [
  {
    name: "SleepyPlays",
    description: "Automated YouTube Shorts content creation system using AI for story generation, voice synthesis, and scheduled video publishing",
    language: "JavaScript",
    url: "https://github.com/b9nn/SleepyPlays",
    category: "Full Stack",
    technologies: ["Node.js", "OpenAI GPT-4", "ElevenLabs", "FFmpeg", "YouTube API", "Docker"],
    achievements: ["Built end-to-end video automation pipeline", "Integrated AI story generation across multiple genres", "Implemented scheduled uploads every 6 hours", "Cloud-ready architecture with Docker support"]
  },
  {
    name: "FluidFlow",
    description: "Machine-learning regression model that predicts key acoustic outputs of various vocal fold models",
    language: "Python",
    url: "https://github.com/b9nn/FluidFlow",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "Matplotlib"],
    achievements: ["Developed Random Forest regression model", "Optimized hyperparameters with cross-validation", "Generated contour plots for model visualization"]
  },
  {
    name: "TitanicML",
    description: "Predicting the survival of passengers aboard the Titanic using machine learning",
    language: "Python",
    url: "https://github.com/b9nn/TitanicML",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib"]

  },
  {
    name: "Deep Image Classifier",
    description: "Deep learning image classification using PyTorch on the CIFAR-10 dataset",
    language: "Python",
    url: "https://github.com/b9nn/CIFAR10-PyTorch",
    category: "Machine Learning",
    technologies: ["PyTorch", "Torchvision", "ResNet18", "Python"],
    achievements: ["Fine-tuned pretrained ResNet18 with transfer learning", "Implemented data augmentation pipeline", "Achieved 78% classification accuracy on test set"]
  },
  {
    name: "IMDB Sentiment Classifier",
    description: "Transformer-based sentiment analysis model for movie review classification",
    language: "Python",
    url: "https://github.com/b9nn/SentimentClassifier_NLP",
    category: "Machine Learning",
    technologies: ["Hugging Face", "DistilBERT", "PyTorch", "Transformers", "Python"],
    achievements: ["Fine-tuned DistilBERT on 50k IMDB reviews", "Developed TF-IDF + Logistic Regression baseline", "Improved over baseline in accuracy and F1 score"]
  },
  {
    name: "ExoAI",
    description: "Web application for exploring and visualizing exoplanet data",
    language: "TypeScript",
    url: "https://github.com/b9nn/HuntingExoPlanets",
    category: "Web Development",
    technologies: ["Python", "React", "Scikit-Learn", "Node.js"]
  },
  {
    name: "MealMinder",
    description: "Smart meal planning and grocery management application with AI-powered meal plan generation",
    language: "Python + TypeScript",
    url: "https://github.com/b9nn/MealMinder",
    category: "Full Stack",
    technologies: ["React", "Django", "SQLite", "Node.js", "TailwindCSS", "OpenAI API"],
    achievements: ["Built responsive UI with React + TailwindCSS", "Developed secure REST API with Django", "Integrated OpenAI API for personalized meal plans", "Reduced meal planning time by 90%"]
  },
  {
    name: "TBCM",
    description: "Triangular Body Cover Model of the Vocal Folds",
    language: "Python",
    url: "https://github.com/b9nn/TBCM",
    category: "Research",
    technologies: ["NumPy", "SciPy", "SymPy", "Pandas", "Matplotlib"]
  },
  {
    name: "Turtle Flight",
    description: "Models planes flying to destinations while avoiding collisions, with gas mechanics implemented",
    language: "NetLogo",
    url: "https://github.com/b9nn/flight_model",
    category: "Simulation",
    technologies: ["NetLogo", "Scala"]
  },
  {
    name: "FamilyTree",
    description: "Interactive family tree web application",
    language: "JavaScript",
    url: "https://github.com/b9nn/GladneyFamilyTree",
    category: "Web Development",
    technologies: ["JavaScript", "TypeScript", "FastAPI", "SQLAlchemy"]
  },
  {
    name: "VTU2CSV",
    description: "Converts VTU files to CSV format for data analysis",
    language: "Python",
    url: "https://github.com/b9nn/vtu_to_csv_conversion",
    category: "Utilities",
    technologies: ["Python", "Pandas", "NumPy"]
  }
];

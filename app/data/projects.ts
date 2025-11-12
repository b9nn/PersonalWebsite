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
}

export const projects: Project[] = [
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

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

// Featured projects (displayed on homepage)
export const featuredProjects: Project[] = [
  {
    name: "Argus — Arctic Defence Platform",
    description: "Full-stack geospatial dark-vessel detection platform that correlates SAR satellite imagery with live AIS tracking to surface suspicious ships in Arctic waters. Co-Founder.",
    language: "Python + TypeScript",
    url: "https://github.com/b9nn/argus-missile",
    category: "Full Stack",
    technologies: ["React", "FastAPI", "PostgreSQL/PostGIS", "Celery", "Docker", "deck.gl", "WebSockets"],
    achievements: [
      "Shipped vessel-awareness tools for 8 Nunavut Inuit communities in partnership with Nunavut Tunngavik Incorporated (NTI): a 3G-tolerant mobile community page and an always-on HTO TV display",
      "Built an R-CNN dark-vessel detector on Sentinel-1 SAR imagery correlated with live AIS tracking",
      "Server-side snapshot API for 3-month navigation replay + auto-generated PDF intelligence reports"
    ]
  },
  {
    name: "posture-probe",
    description: "Playwright + Claude agent that drives the GitHub admin console end-to-end and audits live configuration against a CIS-style security benchmark, emitting structured PASS / FAIL / UNKNOWN findings with verbatim evidence quotes",
    language: "Python",
    url: "https://github.com/b9nn/posture-probe",
    category: "Machine Learning",
    technologies: ["Python", "Playwright", "Claude API", "LLMs", "YAML"],
    achievements: [
      "Built an LLM-driven browser agent that audits live GitHub config against a CIS-style benchmark with verbatim evidence quotes for human verification",
      "Uses accessibility-tree snapshots over brittle CSS selectors to survive UI redesigns",
      "YAML-driven benchmark decouples checks from the agent loop, with persisted session-state auth and a vision-LLM fallback for ambiguous DOM"
    ]
  },
  {
    name: "Red Light Detection — Raspberry Pi CV",
    description: "On-device YOLOv5-nano traffic-light classifier running at 12+ FPS on a Raspberry Pi 4 with Pi Camera, hitting 94% mAP on a custom 3,000-image dataset",
    language: "Python",
    url: "https://github.com/b9nn",
    category: "Machine Learning",
    technologies: ["PyTorch", "YOLOv5", "ONNX Runtime", "Raspberry Pi", "OpenCV"],
    achievements: [
      "Deployed YOLOv5-nano on Raspberry Pi 4 + Pi Camera for real-time red/yellow/green classification at 12+ FPS",
      "Curated and annotated 3,000+ traffic-light images; fine-tuned in PyTorch",
      "Optimized for edge inference via ONNX Runtime, achieving 94% mAP on the test set"
    ]
  },
  {
    name: "SleepyPlays",
    description: "Automated YouTube Shorts content creation system using AI for story generation, voice synthesis, and scheduled video publishing",
    language: "JavaScript",
    url: "https://github.com/b9nn/SleepyPlays",
    category: "Full Stack",
    technologies: ["Node.js", "OpenAI GPT-4", "ElevenLabs", "FFmpeg", "YouTube API", "Docker"],
    achievements: ["Built end-to-end video automation pipeline", "Integrated AI story generation across multiple genres", "Implemented scheduled uploads every 6 hours", "Cloud-ready architecture with Docker support"]
  }
];

// All projects (for reference/archive)
export const projects: Project[] = [
  ...featuredProjects,
  {
    name: "IMDB Sentiment Classifier",
    description: "Transformer-based sentiment analysis model for movie review classification using DistilBERT",
    language: "Python",
    url: "https://github.com/b9nn/SentimentClassifier_NLP",
    category: "Machine Learning",
    technologies: ["Hugging Face", "DistilBERT", "PyTorch", "Transformers", "Python"],
    achievements: ["Fine-tuned DistilBERT on 50k IMDB reviews", "Developed TF-IDF + Logistic Regression baseline", "Improved over baseline in accuracy and F1 score"]
  },
  {
    name: "Deep Image Classifier",
    description: "Deep learning image classification using PyTorch with transfer learning on CIFAR-10",
    language: "Python",
    url: "https://github.com/b9nn/CIFAR10-PyTorch",
    category: "Machine Learning",
    technologies: ["PyTorch", "Torchvision", "ResNet18", "Python"],
    achievements: ["Fine-tuned pretrained ResNet18 with transfer learning", "Implemented data augmentation pipeline", "Achieved 78% classification accuracy on test set"]
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
    name: "ExoAI",
    description: "Web application for exploring and visualizing exoplanet data",
    language: "TypeScript",
    url: "https://github.com/b9nn/HuntingExoPlanets",
    category: "Web Development",
    technologies: ["Python", "React", "Scikit-Learn", "Node.js"]
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
    name: "Gladney Family Memories — mrtag.com",
    description: "Invite-only full-stack ancestry app deployed at mrtag.com for 11 active family members, pairing a React Flow family tree with a media pipeline and production CI/CD",
    language: "Python + TypeScript",
    url: "https://mrtag.com",
    category: "Full Stack",
    technologies: ["React 18", "TypeScript", "React Flow", "FastAPI", "SQLAlchemy 2.0", "Pydantic", "Supabase", "Cloudflare R2"],
    achievements: [
      "Designed and deployed an invite-only ancestry app for 11 active family members on React 18/TypeScript + React Flow over FastAPI/SQLAlchemy 2.0/Pydantic + Supabase Postgres",
      "Engineered a Cloudflare R2 media layer (HEIC→JPEG, presigned URLs, polymorphic tagging) with JWT-gated auth",
      "GitHub Actions CI/CD to Fly.io with weekly pg_dump backups"
    ]
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

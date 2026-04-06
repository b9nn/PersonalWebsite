export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Practice Better",
    position: "AI / Software Engineer",
    duration: "Jan. 2026 - Present",
    location: "Toronto, ON",
    description: [
      "Built semantic search systems with Azure OpenAI text-embedding-3-large and MongoDB, enabling support agents to surface similar resolved tickets across a 3,000+ ticket knowledge base and letting practitioners unlock insights from thousands of client session histories via hybrid semantic search",
      "Developed the custom charting pipeline for an LLM-powered auto-charting feature that generates structured patient charts from session notes, using a chain handler pattern to orchestrate multi-step agent workflows and support practitioner-defined chart templates",
      "Developed an LLM-powered ICD-10 diagnosis code classifier spanning 70,000+ codes that suggests codes from session note summaries, achieving 83% F1 score and reducing manual lookup time for practitioners"
    ],
    technologies: ["Python", "Azure OpenAI", "MongoDB", "LLMs", "Semantic Search", "FastAPI"]
  },
  {
    company: "Celestica",
    position: "Data Analyst, Supply Chain",
    duration: "May 2025 - Aug. 2025",
    location: "Toronto, ON",
    description: [
      "Trained a generative AI model with OCR to extract key product specifications — including case size, resistance, and maximum voltage — from technical drawings, reducing manual data entry",
      "Leveraged APIFY to scrape part data into JSON, then performed ETL with Python and Pandas. Increased the proportion of benchmarked parts by 18% and total dollar value by 22%"
    ],
    technologies: ["Python", "Pandas", "APIFY", "OCR", "Generative AI", "ETL"]
  },
  {
    company: "Fluid Flow Physics Group",
    position: "Machine Learning Research Assistant",
    duration: "Sep. 2024 - Present",
    location: "University of Waterloo",
    description: [
      "Developed a Random Forest regression model to predict fundamental frequency and sound pressure level, optimizing hyperparameters with cross-validation and generating contour plots to visualize model performance",
      "Authored Python scripts to transform vector data from VTU-formatted files into Pandas data frames then export as CSV for further analysis"
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Machine Learning", "Data Visualization"]
  }
];

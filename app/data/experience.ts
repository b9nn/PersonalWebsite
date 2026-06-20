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
    company: "Shopify",
    position: "Machine Learning Engineer (Incoming)",
    duration: "Sep. 2026 - Dec. 2026",
    location: "",
    description: [
      "Incoming Machine Learning Engineer joining Shopify for Fall 2026"
    ],
    technologies: ["Python", "Machine Learning", "LLMs"]
  },
  {
    company: "Magnolia Education",
    position: "Founding Engineer",
    duration: "Feb. 2025 - Present",
    location: "",
    description: [
      "Built a real-time collaborative math whiteboard on Next.js/Vercel using Konva.js and Yjs CRDT websocket sync for live tutoring, replacing a $6K/year commercial vendor with $600/year owned infrastructure",
      "Building a Socratic Claude API tutor with vector retrieval over a session corpus, plus an OCR-driven worksheet-to-LaTeX pipeline producing aligned-environment math blocks and practice quizzes for tutors",
      "Building an end-to-end student onboarding pipeline (TutorBird API + Kit email + Twilio SMS + Next.js portal) to automate new-student intake for the company's 80+ active students"
    ],
    technologies: ["Next.js", "TypeScript", "Konva.js", "Yjs", "Claude API", "Twilio", "Vercel"]
  },
  {
    company: "Practice Better",
    position: "AI / Software Engineer",
    duration: "Jan. 2026 - Apr. 2026",
    location: "Toronto, ON",
    description: [
      "Designed a reusable semantic search pipeline (MongoDB) shipped across three production surfaces: a 3,000+ ticket support knowledge base, the practitioner help centre, and a context-retrieval tool",
      "Built an LLM-powered auto-charting pipeline that generates patient charts from session notes via a chain handler pattern, cutting charting time from 12 minutes to 2 minutes per chart",
      "Developed an LLM-powered ICD-10 diagnosis code classifier across 70,000+ diagnostic codes, suggesting codes from session note summaries at an 83% F1 score"
    ],
    technologies: ["Python", "Azure OpenAI", "MongoDB", "LLMs", "Semantic Search", "FastAPI"]
  },
  {
    company: "Celestica",
    position: "Data Analyst, Supply Chain",
    duration: "May 2025 - Aug. 2025",
    location: "Toronto, ON",
    description: [
      "Trained a generative AI/OCR model to extract product specifications — case size, resistance, and maximum voltage — from technical drawings at a 97% F1 score, eliminating manual data entry",
      "Built an APIFY-driven scrape + Python/Pandas ETL pipeline; raised benchmarked-part coverage by 18% and total dollar value by 22%"
    ],
    technologies: ["Python", "Pandas", "APIFY", "OCR", "Generative AI", "ETL"]
  },
  {
    company: "Fluid Flow Physics Group",
    position: "Machine Learning Research Assistant",
    duration: "Sep. 2024 - Present",
    location: "University of Waterloo",
    description: [
      "Built a machine-learning regression pipeline mapping laryngeal muscle activations to fundamental frequency and sound pressure level in vocal fold biomechanics, achieving R² = 0.91 on simulation-based acoustic predictions",
      "Authored Python scripts to transform vector data from VTU-formatted files into Pandas data frames then export as CSV for further analysis"
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Machine Learning", "Data Visualization"]
  }
];

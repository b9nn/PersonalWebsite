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
    position: "AI Engineer",
    duration: "Jan. 2026 - Apr. 2026",
    location: "Toronto, ON",
    description: [
      "Incoming AI Engineer role focused on developing and implementing AI solutions"
    ],
    technologies: ["Python", "Machine Learning", "AI", "NLP"]
  },
  {
    company: "Celestica",
    position: "Data Analyst, Supply Chain",
    duration: "May 2025 - Aug. 2025",
    location: "Toronto, ON",
    description: [
      "Engineered a OCR pipeline to extract key product specifications, including case size, resistance, and maximum voltage, from technical drawings, reducing manual data entry",
      "Designed and implemented advanced data visualizations in PowerBI for supply chain process owners, cutting preparation and presentation time by 40%",
      "Leveraged APIFY to scrape part data into JSON, then performed ETL with Python and Pandas. Increased the proportion of benchmarked parts by 18% and total dollar value by 22%"
    ],
    technologies: ["Python", "PowerBI", "Azure", "APIFY", "Pandas", "OCR", "ETL", "DataBricks"]
  },
  {
    company: "Fluid Flow Physics Group",
    position: "Machine Learning Research Assistant",
    duration: "Sep. 2024 - Present",
    location: "University of Waterloo",
    description: [
      "Employed  various regression models to predict vocal fold outputs",
      "Applied transfer learning to predict on scarce finite element data",
      "Authored Python scripts to transform vector data from VTU-formatted files into Pandas data frames then export as CSV for further analysis"
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Machine Learning", "Data Visualization"]
  }
];

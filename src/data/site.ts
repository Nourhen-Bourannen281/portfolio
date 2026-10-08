export const site = {
  email: "nourhenbouranen02@gmail.com",
  phone: "+216 54 023 020",
  phoneLink: "+21654023020",
  github: "https://github.com/Nourhen-Bourannen281",
  linkedin: "https://www.linkedin.com/in/nourhen-bourannen-568824375/",
  cv: "/Nourhen-Bourannen-CV.pdf",
};

export const skillGroups = [
  {
    key: "web",
    learning: false,
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML & CSS",
      "Git",
    ],
  },
  {
    key: "data",
    learning: true,
    items: ["Python", "Machine Learning"],
  },
  {
    key: "qa",
    learning: false,
    items: ["Manual Testing", "Postman", "Chrome DevTools", "Bug Reporting"],
  },
];

// Stars out of 5
export const languages = [
  { key: "arabic", stars: 5 },
  { key: "french", stars: 4 },
  { key: "english", stars: 4 },
  { key: "italian", stars: 2 },
];

export const experiences = [
  {
    key: "qa",
    period: "2025 – 2026",
    stack: ["Postman", "Chrome DevTools", "Manual Testing"],
  },
  {
    key: "codealpha",
    period: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
  },
];

export const qaTools = [
  "Postman",
  "Chrome DevTools",
  "Manual Testing",
  "Bug Reporting",
];

export type Project = {
  key: string;
  year?: string;
  team?: boolean;
  stack: string[];
  image: string; // screenshot, e.g. "/projects/smart-trade.png" ("" = placeholder)
  code: string; // GitHub repo link ("" = your GitHub profile)
  linkedin: string; // LinkedIn post link ("" = your LinkedIn profile)
};

export const projects: Project[] = [
  {
    key: "smarttrade",
    year: "2026",
    team: true,
    stack: ["React", "Node.js", "Express", "MongoDB", "Mobile app", "AI chatbot"],
    image: "",
    code: "",
    linkedin: "",
  },
  {
    key: "studygenius",
    stack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini"],
    image: "",
    code: "",
    linkedin: "",
  },
  {
    key: "ecommerce",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    image: "",
    code: "",
    linkedin: "",
  },
  {
    key: "social",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    image: "",
    code: "",
    linkedin: "",
  },
  {
    key: "restaurant",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "",
    code: "",
    linkedin: "",
  },
  {
    key: "todo",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "",
    code: "",
    linkedin: "",
  },
];
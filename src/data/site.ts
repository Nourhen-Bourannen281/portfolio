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
      "Java",
      "Express",
      "MongoDB",
      "HTML & CSS",
      "Git",
      "Docker",
      "PHP",
    ],
  },
  {
    key: "data",
    learning: true,
    items: ["Python", "Machine Learning","Entrainement des modèles"],
  },
  {
    key: "qa",
    learning: false,
    items: ["Manual Testing", "Postman", "Chrome DevTools","Web testing", "Bug Reporting"],
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
    stack: ["Postman", "Chrome DevTools", "Manual testing"],
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
  "Manual testing",
  "Bug reporting",
];

type Project = {
  key: string;
  year?: string;
  team?: boolean;
  stack: string[];
  code: string; // GitHub link ("" = button hidden)
  live: string; // deployed site link ("" = button hidden)
  video: string; // demo video link ("" = button hidden)
};

export const projects: Project[] = [
  {
    key: "smarttrade",
    year: "2026",
    team: true,
    stack: ["React", "Node.js", "Express", "MongoDB", "Mobile app", "AI chatbot"],
    code: "",
    live: "",
    video: "",
  },
  {
    key: "studygenius",
    stack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini"],
    code: "",
    live: "",
    video: "",
  },
  {
    key: "ecommerce",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    code: "",
    live: "",
    video: "",
  },
  {
    key: "social",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    code: "",
    live: "",
    video: "",
  },
  {
    key: "restaurant",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    code: "",
    live: "",
    video: "",
  },
  {
    key: "todo",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    code: "",
    live: "",
    video: "",
  },
];
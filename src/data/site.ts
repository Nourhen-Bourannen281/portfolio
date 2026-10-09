export const site = {
  email: "nourhenbouranen02@gmail.com",
  phone: "+216 54 023 020",
  phoneLink: "+21654023020",
  github: "https://github.com/Nourhen-Bourannen281",
  linkedin: "https://www.linkedin.com/in/nourhen-bourannen-568824375/",
  cv: "/Nourhen-Bourannen-CV.pdf",
  contactImage: "/photo.png", // image next to the form
  formEndpoint: "", // form service link. "" = opens the mail app
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
    items: [
      "Manual Testing",
      "Functional Testing",
      "Responsive Testing",
      "Regression Testing",
      "Bug Reporting",
    ],
  },
  {
    key: "tools",
    learning: false,
    items: ["Git", "GitHub", "Postman", "Chrome DevTools"],
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
  live: string; // the project's own website ("" = no button)
  linkedin: string; // the LinkedIn post about this project ("" = no button)
  code: string; // this project's own GitHub repository ("" = no button)
};

export const projects: Project[] = [
  {
    key: "smarttrade",
    year: "2026",
    team: true,
    stack: ["React", "Node.js", "Express", "MongoDB", "Mobile app", "AI chatbot"],
    image: "",
    live: "",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7483200321037672449/",
    code: "https://github.com/Nourhen-Bourannen281/ETAP-GAS",
  },
  {
    key: "studygenius",
    stack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini"],
    image: "",
    live: "https://study-genius-sand.vercel.app/login",
    linkedin: "",
    code: "https://github.com/Nourhen-Bourannen281/StudyGenius",
  },
  {
    key: "ecommerce",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    image: "",
    live: "",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7365821258279641089/",
    code: "https://github.com/Nourhen-Bourannen281/CodeAlpha_UrStore",
  },
  {
    key: "social",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git"],
    image: "",
    live: "",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7365823626731835395/",
    code: "https://github.com/Nourhen-Bourannen281/CodeAlpha_WeConnecte-v2",
  },
  {
    key: "restaurant",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "",
    live: "https://lunaya-restaurant-frontend.onrender.com/",
    linkedin: "",
    code: "https://github.com/Nourhen-Bourannen281/lunaya-restaurant-site",
  },
  {
    key: "todo",
    year: "2024 – 2025",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "",
    live: "https://todo-frontend-44u5.onrender.com/",
    linkedin: "",
    code: "https://github.com/Nourhen-Bourannen281/TODO_App",
  },
];
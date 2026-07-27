export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

export interface Department {
  name: string;
  description: string;
  gradient: string;
  glowColor: string;
  members: TeamMember[];
}

import { LINKS } from "@/lib/links";

export interface Founder {
  name: string;
  role: string;
  /** Optional — the card omits the paragraph when absent. */
  description?: string;
  initials: string;
  /** Optional — the card falls back to initials when absent. */
  image?: string;
  links: {
    x?: string;
    linkedin?: string;
    github?: string;
    huggingface?: string;
    paper?: string;
  };
}

export const founders: Founder[] = [
  {
    name: "Abdullah Khan Zehady (Aninda)",
    role: "Founder & CEO",
    description:
      "ML infrastructure builder and BongLLaMA engineer. Built the first open-source Bangla LLM fine-tuned for civic NLP, available on Hugging Face (published in LoResLM @EACL 2026).",
    initials: "AK",
    image: "/assets/images/founder-image.jpeg",
    links: {
      x: LINKS.founderTwitter,
      linkedin: LINKS.founderLinkedin,
      huggingface: LINKS.huggingFaceCollection,
      paper: LINKS.arxivPaper,
    },
  },
  {
    name: "Nick Scipione",
    role: "Co-Founder",
    // Every clause here is taken from his LinkedIn profile: the "AI Engineer"
    // headline, the Austin location, and the Northeastern education entry
    // (BS Chemical Engineering, 2016-2021, skills Python and Data Analytics).
    description:
      "AI Engineer based in Austin, Texas. Came to AI from Chemical Engineering at Northeastern University, graduating in 2021, and works day to day in Python and data analytics.",
    initials: "NS",
    image: "/assets/images/team/nick-scipione.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/nickolas-scipione/",
      github: "https://github.com/nickscip",
    },
  },
];

export const foundingMember = {
  name: "Naymul Islam",
  role: "Founding Member",
  description:
    "Full-stack engineer and NLP researcher. Core contributor to BanglaLlama and Drishtikon, building data pipelines and research infrastructure for low-resource language AI.",
  initials: "NY",
  image: "/assets/images/team/naimul.jpeg",
  links: {
    github: "https://github.com/ai-naymul",
  },
};

export const departments: Department[] = [
  {
    name: "Development Team",
    description: "Building the platform that powers transparent journalism",
    gradient: "from-gray-600 to-gray-400",
    glowColor: "rgba(107, 114, 128, 0.15)",
    members: [
      { name: "Minhajul Islam Tapadar", role: "Founding Software Engineer", initials: "MJ", image: "/assets/images/team/minhaj.png" },
      { name: "Naim Lasker", role: "Founding Software Engineer", initials: "NM", image: "/assets/images/team/naim-lasker.jpeg" },
      { name: "Naymul Islam", role: "Founding Software Engineer", initials: "NY", image: "/assets/images/team/naimul.jpeg" },
    ],
  },
  {
    name: "Research Team",
    description: "Pushing the boundaries of NLP for low-resource languages",
    gradient: "from-purple-500 to-violet-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    members: [
      { name: "Abdullah Khan Zehady", role: "Research Lead", initials: "AN", image: "/assets/images/team/aninda.jpeg" },
      { name: "Shubhashis Roy Dipta", role: "Researcher", initials: "SD", image: "/assets/images/team/dipta.jpeg" },
      { name: "Naymul Islam", role: "Researcher", initials: "NY", image: "/assets/images/team/naimul.jpeg" },
      { name: "Santu Karmaker", role: "Research Advisor", initials: "SK", image: "/research/people/santu.jpg" },
      { name: "Safi Al Mamun", role: "Researcher", initials: "SA", image: "/research/people/safi.jpg" },
    ],
  },
  {
    name: "Content Creators",
    description: "Crafting stories that educate and inspire action",
    gradient: "from-pink-500 to-rose-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
    members: [
      { name: "Taibur Rahman", role: "Content Creator", initials: "TB", image: "/assets/images/team/taibur.png" },
      { name: "Anika Afroz Saba", role: "Content Creator", initials: "SB", image: "/assets/images/team/saba.jpeg" },
    ],
  },
];

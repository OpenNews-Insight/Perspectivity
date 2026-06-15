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

export const founder = {
  name: "Abdullah Khan Zehady (Aninda)",
  role: "Founder & CEO",
  description:
    "ML infrastructure builder and BongLLaMA engineer. Built the first open-source Bangla LLM fine-tuned for civic NLP, available on Hugging Face (published in LoResLM @EACL 2026).",
  initials: "AK",
  links: {
    x: LINKS.founderTwitter,
    linkedin: LINKS.founderLinkedin,
    huggingface: LINKS.huggingFaceCollection,
    paper: LINKS.arxivPaper,
  },
};

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
    ],
  },
  {
    name: "Research Team",
    description: "Pushing the boundaries of NLP for low-resource languages",
    gradient: "from-purple-500 to-violet-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    members: [
      { name: "Abdullah Khan Zehady", role: "Research Lead", initials: "AN", image: "/assets/images/team/aninda.jpeg" },
      { name: "Shubhashis Roy Dipta", role: "Research Lead", initials: "SD", image: "/assets/images/team/dipta.jpeg" },
      { name: "Naymul Islam", role: "Research Lead", initials: "NY", image: "/assets/images/team/naimul.jpeg" },
      { name: "Santu Karmaker", role: "Research Advisor", initials: "SK", image: "/research/people/santu.jpg" },
      { name: "Safi Al Mamun", role: "Researcher", initials: "SA", image: "/research/people/safi.jpg" },
      { name: "Nusrat Jahan Lia", role: "Researcher", initials: "NL", image: "/assets/images/team/lia.jpeg" },
      { name: "Madhusodan Chakraborty", role: "Researcher", initials: "MC", image: "/assets/images/team/opu.jpeg" },
      { name: "Sibgat Zehady", role: "Researcher", initials: "SZ", image: "/research/people/sibgat.jpg" },
    ],
  },
  {
    name: "Content Creators",
    description: "Crafting stories that educate and inspire action",
    gradient: "from-pink-500 to-rose-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
    members: [
      { name: "Taibur Rahman", role: "Content Creator", initials: "TB", image: "/assets/images/team/taibur.png" },
      { name: "Mostare Mahajabin", role: "Content Creator", initials: "MM", image: "/assets/images/team/misu.jpg" },
      { name: "Anika Afroz Saba", role: "Content Creator", initials: "SB", image: "/assets/images/team/saba.jpeg" },
    ],
  },
  {
    name: "Marketing",
    description: "Spreading the mission to every corner of the world",
    gradient: "from-orange-500 to-amber-400",
    glowColor: "rgba(249, 115, 22, 0.15)",
    members: [
      { name: "Arif Hossain", role: "Marketing", initials: "AR", image: "/assets/images/team/arif.jpg" },
      { name: "Mostare Mahajabin", role: "Marketing", initials: "MM", image: "/assets/images/team/misu.jpg" },
    ],
  },
];

// Research page data - BanglaLLM research, publications, team, repos

export interface ResearchTheme {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface Author {
  name: string;
  isLabMember: boolean;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: Author[];
  links: {
    arxiv?: string;
    acl?: string;
    pdf?: string;
  };
  note?: string;
  status: "published" | "in-progress";
  comingSoon?: string;
}

export interface ModelFamily {
  name: string;
  description: string;
  huggingFaceUrl: string;
  badge: string;
}

export interface Dataset {
  name: string;
  size: string;
  description: string;
  huggingFaceUrl: string;
}

export interface ResearchTeamMember {
  name: string;
  role: string;
  affiliation: string;
  initials: string;
  image?: string;
  links: {
    github?: string;
    website?: string;
  };
}

export interface Repo {
  name: string;
  description: string;
  githubUrl: string;
  topics?: string[];
}

// Research themes
export const researchThemes: ResearchTheme[] = [
  {
    id: "foundation-models",
    icon: "cpu",
    name: "Foundation Models",
    description:
      "New tokenization, continued pre-training, and instruction-tuning for Bangla, built on Llama and Qwen. The BanglaLlama family ranges from 3B to 33B; all released openly on HuggingFace.",
  },
  {
    id: "evaluation",
    icon: "bar-chart",
    name: "Evaluation & Benchmarks",
    description:
      "Measuring how well models perform in Bangla is still largely an open question. We're building benchmarks around political-bias detection, mathematical reasoning, and test-time scaling.",
  },
  {
    id: "data-infrastructure",
    icon: "database",
    name: "Data Infrastructure",
    description:
      "Good models need good data, and for Bangla we've built most of it ourselves. News crawlers, translated instruction datasets (Bangla-Alpaca, Bangla-Orca), math datasets, all open.",
  },
  {
    id: "research-to-product",
    icon: "rocket",
    name: "Research to Product",
    description:
      "Research that reaches people matters more than research that stays on a shelf. Drishtikon, a news-literacy platform for Bangladesh, is built on this lab's work.",
  },
];

// Publications
export const publications: Publication[] = [
  {
    id: "banglallama",
    title: "BanglaLlama: LLaMA for Bangla Language",
    venue: "LoResLM @ EACL 2026",
    year: 2026,
    authors: [
      { name: "Abdullah Khan Zehady", isLabMember: true },
      { name: "Shubhashis Roy Dipta", isLabMember: true },
      { name: "Naymul Islam", isLabMember: true },
      { name: "Safi Al Mamun", isLabMember: true },
      { name: "Santu Karmaker", isLabMember: true },
    ],
    links: {
      arxiv: "https://arxiv.org/abs/2410.21200",
    },
    note: "Introduces Bangla-Alpaca (52k) and Bangla-Orca (172k) instruction datasets, plus 5 open BanglaLlama model variants.",
    status: "published",
  },
  {
    id: "read-between-lines",
    title: "Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles",
    venue: "BLP @ IJCNLP-AACL 2025",
    year: 2025,
    authors: [
      { name: "Nusrat Jahan Lia", isLabMember: true },
      { name: "Shubhashis Roy Dipta", isLabMember: true },
      { name: "Abdullah Khan Zehady", isLabMember: true },
      { name: "Naymul Islam", isLabMember: true },
      { name: "Madhusodan Chakraborty", isLabMember: true },
      { name: "Abdullah Al Wasif", isLabMember: false },
    ],
    links: {
      arxiv: "https://arxiv.org/abs/2510.03898",
      acl: "https://aclanthology.org/2025.banglalp-1.5/",
    },
    note: "BanglaBias, a 200-article benchmark with three-way labels (gov-leaning / gov-critique / neutral), evaluated across 28 LLMs.",
    status: "published",
  },
  {
    id: "tutorlm",
    title: "TutorLM",
    venue: "",
    year: 2026,
    authors: [],
    links: {},
    note: "Building tutoring-oriented Bengali models.",
    status: "in-progress",
    comingSoon: "Preprint coming soon",
  },
];

// Model families
export const modelFamilies: ModelFamily[] = [
  {
    name: "BanglaLlama Family",
    description:
      "Built on Llama 3 / 3.1 / 3.2. Base and instruction-tuned variants, from 3B to 11B parameters.",
    huggingFaceUrl: "https://huggingface.co/collections/BanglaLLM/banglallama",
    badge: "Multiple checkpoints",
  },
  {
    name: "Bangla-s1k Family",
    description:
      "Test-time scaling adapted for Bengali, built on Qwen-2.5 (3B/32B) and QWQ-32B. Optimized for reasoning tasks.",
    huggingFaceUrl: "https://huggingface.co/BanglaLLM",
    badge: "Reasoning models",
  },
];

// Datasets
export const datasets: Dataset[] = [
  {
    name: "bangla-alpaca-orca",
    size: "172k examples",
    description: "Mixed Alpaca + Orca Bangla instruction dataset.",
    huggingFaceUrl: "https://huggingface.co/datasets/BanglaLLM/bangla-alpaca-orca",
  },
  {
    name: "bangla-alpaca",
    size: "52k examples",
    description: "Alpaca-style Bangla instruction dataset.",
    huggingFaceUrl: "https://huggingface.co/datasets/BanglaLLM/bangla-alpaca",
  },
  {
    name: "bangla_math",
    size: "859k examples",
    description: "Bengali math problems and solutions for reasoning training.",
    huggingFaceUrl: "https://huggingface.co/datasets/BanglaLLM",
  },
];

// Research team
export const researchTeam: ResearchTeamMember[] = [
  {
    name: "Abdullah Khan Zehady",
    role: "Research Lead",
    affiliation: "Founder, Perspectivity",
    initials: "AK",
    image: "/research/people/aninda.jpg",
    links: {
      github: "https://github.com/brishtiteveja",
    },
  },
  {
    name: "Shubhashis Roy Dipta",
    role: "Research Lead",
    affiliation: "PhD Student, UMBC",
    initials: "SD",
    image: "/research/people/dipta.jpg",
    links: {
      github: "https://github.com/dipta007",
      website: "https://roydipta.com/",
    },
  },
  {
    name: "Naymul Islam",
    role: "Research Lead",
    affiliation: "BanglaLLM",
    initials: "NI",
    image: "/research/people/naimul.jpg",
    links: {
      github: "https://github.com/ai-naymul",
    },
  },
  {
    name: "Santu Karmaker",
    role: "Research Advisor",
    affiliation: "Assistant Professor, UCF / Bridge-AI Lab",
    initials: "SK",
    image: "/research/people/santu.jpg",
    links: {
      website: "https://karmake2.github.io/",
    },
  },
  {
    name: "Safi Al Mamun",
    role: "Researcher",
    affiliation: "BanglaLLM",
    initials: "SA",
    image: "/research/people/safi.jpg",
    links: {},
  },
  {
    name: "Nusrat Jahan Lia",
    role: "Researcher",
    affiliation: "BanglaLLM",
    initials: "NL",
    image: "/research/people/lia.jpg",
    links: {
      github: "https://github.com/NusRAT-LiA",
    },
  },
  {
    name: "Madhusodan Chakraborty",
    role: "Researcher",
    affiliation: "BanglaLLM",
    initials: "MC",
    image: "/research/people/opu.jpg",
    links: {},
  },
  {
    name: "Sibgat Zehady",
    role: "Researcher",
    affiliation: "BanglaLLM",
    initials: "SZ",
    image: "/research/people/sibgat.jpg",
    links: {},
  },
];

// GitHub repositories
export const repos: Repo[] = [
  {
    name: "bangla-llama",
    description: "Training notebooks and configs for the BanglaLlama family. LLaMA 2/3/3.1/3.2, Mistral, Mixtral, Unsloth.",
    githubUrl: "https://github.com/BanglaLLM/bangla-llama",
    topics: ["llama", "bangla", "training"],
  },
  {
    name: "s1-bengali",
    description: "Test-time scaling adapted for Bengali reasoning and complex tasks.",
    githubUrl: "https://github.com/BanglaLLM/s1-bengali",
    topics: ["reasoning", "scaling", "bangla"],
  },
  {
    name: "lm-evaluation-harness",
    description: "Evaluation framework fork with Bangla-oriented benchmarks and custom tasks.",
    githubUrl: "https://github.com/BanglaLLM/lm-evaluation-harness",
    topics: ["evaluation", "benchmarks", "bangla"],
  },
  {
    name: "BanglaDataManager",
    description: "Dataset management infrastructure for Bangla LLM work.",
    githubUrl: "https://github.com/BanglaLLM/BanglaDataManager",
    topics: ["dataset", "data-management", "bangla"],
  },
  {
    name: "bd-newspaper-crawlers",
    description: "Crawlers for Bangla news sources and blogs, used for data collection.",
    githubUrl: "https://github.com/BanglaLLM/bd-newspaper-crawlers",
    topics: ["crawler", "bangla", "news"],
  },
  {
    name: "Open-Translator",
    description: "Open-source translation agent for Bangla and other low-resource languages.",
    githubUrl: "https://github.com/BanglaLLM/Open-Translator",
    topics: ["translation", "multilingual", "bangla"],
  },
  {
    name: "youtube_bangla",
    description: "Q&A system over Bangla YouTube content using language models.",
    githubUrl: "https://github.com/BanglaLLM/youtube_bangla",
    topics: ["qa", "youtube", "bangla"],
  },
  {
    name: "OpenMAIC",
    description: "Multi-agent interactive classroom platform powered by Bangla language models.",
    githubUrl: "https://github.com/BanglaLLM/OpenMAIC",
    topics: ["education", "agents", "bangla"],
  },
];

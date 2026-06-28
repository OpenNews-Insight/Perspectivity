// Central config for all external links used across the app.
// Update URLs here — they propagate everywhere automatically.

export const LINKS = {
  // Products
  perspectivity: "https://app.perspectivity.co/",
  drishtikon: "https://drishtikon.life",
  perspectivityDomain: "https://perspectivity.co",

  // API endpoints
  drishtikonAPI: "https://drishtikon.life/server/api/articles/",
  perspectivityAPI: "https://app.perspectivity.co/server/api/articles/",

  // Social media
  youtube:
    "https://www.youtube.com/@%E0%A6%A6%E0%A7%83%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%95%E0%A7%8B%E0%A6%A3-Perspectivity",
  facebook: "https://web.facebook.com/DrishtikonBangladesh",
  linkedinCompany: "https://www.linkedin.com/company/banglallm/",

  // Founder socials
  founderTwitter: "https://x.com/brishtiteveja",
  founderLinkedin:
    "https://www.linkedin.com/in/abdullah-khan-zehady-915ba024/",

  // Research & open source
  arxivPaper: "https://arxiv.org/abs/2410.21200",
  googleScholar:
    "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FA5RZj0AAAAJ&sortby=pubdate&citation_for_view=FA5RZj0AAAAJ:roLk4NBRz8UC",
  huggingFace: "https://huggingface.co/BanglaLLM",
  huggingFaceCollection:
    "https://huggingface.co/collections/BanglaLLM/banglallama",
  github: "https://github.com/BanglaLLM/Drishtikon/",

  // Video
  demoVideo: "https://youtu.be/X3_Tdz3np24?si=DuuDo2EllWlxbUtI",
  loomDemo:
    "https://www.loom.com/embed/3f5e1e09fdda48aa8c10157ada5bee70?sid=bbc6376a-a513-410f-b6c4-90b2d1aca624",
  perspectivityYouTube: "https://www.youtube.com/embed/YVqdN4XWbWg?autoplay=1&controls=0",
  drishtikonYouTube: "https://www.youtube.com/embed/X3_Tdz3np24?autoplay=1&controls=0",

  // Contact
  supportEmail: "mailto:support@perspectivity.co",
  demoRequest:
    "mailto:support@perspectivity.co?subject=Demo%20Request%20%E2%80%94%20Perspectivity&body=Hi%20Perspectivity%20team%2C%0D%0A%0D%0AI%27d%20like%20to%20request%20a%20demo%20of%20the%20narrative%20intelligence%20platform.%0D%0A%0D%0AOrganization%3A%0D%0ARole%3A%0D%0AUse%20case%3A%0D%0A%0D%0AThanks.",
  researchContactEmail: "mailto:brishtiteveja@gmail.com",

  // BanglaLLM research
  banglallmGitHub: "https://github.com/BanglaLLM",
  banglallmHuggingFace: "https://huggingface.co/BanglaLLM",
  banglallmCollection: "https://huggingface.co/collections/BanglaLLM/banglallama",

  // Publications (arXiv + ACL links)
  banglallamaArxiv: "https://arxiv.org/abs/2410.21200",
  readBetweenLinesArxiv: "https://arxiv.org/abs/2510.03898",
  readBetweenLinesACL: "https://aclanthology.org/2025.banglalp-1.5/",

  // Datasets
  banglaAlpacaOrcaDataset: "https://huggingface.co/datasets/BanglaLLM/bangla-alpaca-orca",
  banglaAlpacaDataset: "https://huggingface.co/datasets/BanglaLLM/bangla-alpaca",
  banglaMathDataset: "https://huggingface.co/datasets/BanglaLLM",

  // GitHub repos
  banglaLlamaRepo: "https://github.com/BanglaLLM/bangla-llama",
  s1BengaliRepo: "https://github.com/BanglaLLM/s1-bengali",
  lmEvaluationHarnessRepo: "https://github.com/BanglaLLM/lm-evaluation-harness",
  banglaDataManagerRepo: "https://github.com/BanglaLLM/BanglaDataManager",
  bdNewspaperCrawlersRepo: "https://github.com/BanglaLLM/bd-newspaper-crawlers",
  openTranslatorRepo: "https://github.com/BanglaLLM/Open-Translator",
  youtubeBanglaRepo: "https://github.com/BanglaLLM/youtube_bangla",
  openMAICRepo: "https://github.com/BanglaLLM/OpenMAIC",

  // Analytics
  gtag: "https://www.googletagmanager.com/gtag/js?id=G-DLK18KPVM1",
} as const;

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is Perspectivity, and how is it different from other news platforms?",
    a: "Perspectivity doesn't just show you the news — it shows you how the news is being told. We aggregate coverage from hundreds of sources and reveal the bias, ownership, and framing behind each story. Think of it as X-ray vision for media narratives.",
  },
  {
    q: "How does your bias detection actually work?",
    a: "Autonomous AI Bias-Agents — built on our open-source OpenNewsInsight framework — read the actual content of each story and score bias per article, not per outlet. We combine that with ownership, funding, and affiliation mapping, so you see both how a story was framed and which interests the source represents.",
  },
  {
    q: "How is your scoring different from Ground News or AllSides?",
    a: "Ground News relies on static, manual per-outlet ratings; AllSides uses credit-gated manual checks. Both assign each outlet a fixed leaning. Perspectivity's AI Bias-Agents read each story in real time and score it per article — across multiple axes, not just left versus right, and in Bangla as well as English.",
  },
  {
    q: "Is your methodology open source?",
    a: "Yes. The OpenNewsInsight framework is open-source, and the underlying language research (BanglaLLM / BongLLaMA) is peer-reviewed, with models and datasets published on Hugging Face. You can inspect how a result was produced — not just trust a black-box score.",
  },
  {
    q: "Why should I trust your summaries over reading the originals?",
    a: "Our summaries extract key facts from many sources, not one outlet's take. You can always click through to the full articles. We enhance your understanding — we don't replace original reporting.",
  },
  {
    q: "Why does media bias analysis matter now more than ever?",
    a: "With algorithmically curated feeds, most people live in information bubbles without realizing it. Studies show over 80% of readers can't identify narrative framing. Perspectivity gives you the tools to see past it and form your own conclusions.",
  },
  {
    q: "What's your long-term vision?",
    a: "To build the global standard for media transparency. Starting with the US and South Asia, we're expanding to every major news market — because the right to understand media bias shouldn't depend on where you live.",
  },
];


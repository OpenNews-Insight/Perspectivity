import type { ContentPage } from "@/lib/content/types";

export const SOLUTIONS: ContentPage[] = [
  {
    slug: "election-integrity",
    collection: "solutions",
    eyebrow: "Use Case · Election Integrity",
    title: "See who is shaping the election narrative — before it lands.",
    metaTitle: "Election Integrity & Narrative Monitoring | Perspectivity",
    metaDescription:
      "Track how outlets and actors frame candidates, issues, and results across the political spectrum and across languages. Detect coordinated framing and foreign-influence narratives during election cycles.",
    intro:
      "Elections are won and lost in the framing. Perspectivity maps how every outlet covers a candidate or issue, surfaces coordinated framing across outlets, and flags influence narratives as they emerge — in English and in Bangla.",
    sections: [
      {
        heading: "Framing across the full spectrum",
        body: [
          "For any candidate, debate, or ballot issue, see how Left, Center, and Right outlets headline the same event. Each framing shows what an outlet emphasized and what it quietly left out — so you can read the spin, not just the headline.",
        ],
      },
      {
        heading: "Coordinated-framing detection",
        body: [
          "When several outlets adopt near-identical language within a short window, Perspectivity flags the pattern. That signal is how researchers and monitors distinguish organic coverage from a pushed narrative.",
        ],
      },
      {
        heading: "Multilingual coverage competitors can't read",
        body: [
          "Influence operations increasingly run in local languages. Perspectivity reads Bangla alongside English, so narratives crossing the US–Bangladesh corridor — or any diaspora audience — don't slip past unnoticed.",
        ],
      },
    ],
    differentiators: [
      "Public, transparent framing — not a black-box risk score",
      "Real outlet coverage mapped on a Left–Center–Right spectrum",
      "Multilingual (English + Bangla) out of the box",
    ],
    faq: [
      {
        q: "How is Perspectivity different from a media-monitoring tool?",
        a: "Media-monitoring tools count mentions. Perspectivity reads the framing — who emphasized what, who stayed silent, and which outlets moved together — then maps it across the political spectrum.",
      },
      {
        q: "Can it monitor non-English influence operations?",
        a: "Yes. Bangla coverage is native today, which makes Perspectivity one of the few platforms that can follow narratives crossing between English and Bangla-speaking audiences.",
      },
    ],
  },
  {
    slug: "coordinated-framing",
    collection: "solutions",
    eyebrow: "Use Case · Coordinated Framing Detection",
    title: "When outlets move together, you see it first.",
    metaTitle: "Coordinated Framing Detection | Perspectivity",
    metaDescription:
      "Detect when multiple news outlets adopt near-identical language about the same story within a short window. Perspectivity flags coordinated framing across the political spectrum.",
    intro:
      "Coordinated framing is rarely announced. It shows up as several outlets suddenly using the same phrasing, the same emphasis, and the same omissions. Perspectivity detects that pattern automatically.",
    sections: [
      {
        heading: "The signal: near-identical framing, fast",
        body: [
          "For each story, Perspectivity compares how outlets frame it. When framing converges across outlets within hours — the same labels, the same emphasized facts, the same gaps — it surfaces a coordinated-framing alert.",
        ],
      },
      {
        heading: "Who is aligned with whom",
        body: [
          "A network view shows which outlets consistently align on framing and which contradict each other. Over time this builds an evidence-backed picture of influence, not guesswork.",
        ],
      },
    ],
    differentiators: [
      "Reads the actual content — not just metadata or mentions",
      "Aligns and contradicts signals across the spectrum",
      "Time-windowed detection, so you catch the moment framing converges",
    ],
  },
  {
    slug: "foreign-influence",
    collection: "solutions",
    eyebrow: "Use Case · Foreign Influence Tracking",
    title: "Follow influence narratives across languages and borders.",
    metaTitle: "Foreign Influence & Cross-Border Narrative Tracking | Perspectivity",
    metaDescription:
      "Track foreign-influence narratives as they cross borders and languages. Perspectivity reads content natively in English and Bangla to surface coordinated influence operations.",
    intro:
      "Influence operations thrive where monitors can't read the language. Perspectivity's content-native, multilingual engine follows narratives as they move between English and Bangla audiences — the kind of coverage most platforms simply cannot read.",
    sections: [
      {
        heading: "Content-native, not metadata-only",
        body: [
          "Incumbents mostly sell source metadata. Perspectivity reads the actual articles and broadcasts, so influence is detected from what is said — not just from where it came.",
        ],
      },
      {
        heading: "Cross-language evidence",
        body: [
          "A narrative seeded in one language and amplified in another is a classic influence signature. Native Bangla + English coverage makes that path visible end to end.",
        ],
      },
    ],
    differentiators: [
      "Reads content, not just network metadata",
      "Native multilingual coverage (English + Bangla)",
      "Affiliation mapping shows who is connected to whom — with confidence scores",
    ],
  },
  {
    slug: "crisis-communications",
    collection: "solutions",
    eyebrow: "Use Case · Crisis Communications",
    title: "In a crisis, read the narrative in minutes — not days.",
    metaTitle: "Crisis Communications & Narrative Monitoring | Perspectivity",
    metaDescription:
      "When a story breaks, see instantly how every outlet is framing it, which narratives are rising, and what is being suppressed. Built for comms and PR teams in fast-moving crises.",
    intro:
      "In a crisis, the framing hardens in the first hours. Perspectivity shows comms teams exactly how the story is being told across the spectrum, which narratives are gaining momentum, and where the silence is — in real time.",
    sections: [
      {
        heading: "Real-time framing across outlets",
        body: [
          "The moment a story breaks, see how Left, Center, and Right outlets are headlining it. You get the emphasis and the omission per outlet, so your response speaks to how people are actually hearing the story.",
        ],
      },
      {
        heading: "Momentum and suppression signals",
        body: [
          "Ranked narratives show what is rising, what is fading, and what is being suppressed — including which framings are amplified by one side and absent from the other. That is where the next wave of the crisis is forming.",
        ],
      },
    ],
    differentiators: [
      "Per-outlet framing in real time, not a stale daily digest",
      "Rising / fading / suppressed momentum signals",
      "Source-backed framing — every claim is traceable",
    ],
  },
  {
    slug: "narrative-risk",
    collection: "solutions",
    eyebrow: "Use Case · Narrative Risk Monitoring",
    title: "Catch the narrative risk before it becomes a headline.",
    metaTitle: "Narrative Risk Monitoring | Perspectivity",
    metaDescription:
      "Continuously monitor how narratives about your organization, sector, or leadership are forming and moving. Perspectivity surfaces emerging narrative risk early.",
    intro:
      "Reputational risk usually starts as a small, quietly amplified narrative. Perspectivity watches how stories about an organization or sector form, who is pushing them, and whether they are gaining momentum — so risk is visible while there is still time to act.",
    sections: [
      {
        heading: "Emerging-narrative detection",
        body: [
          "Rather than alerting you once a crisis is already viral, Perspectivity surfaces narratives as they form — when a handful of outlets begin converging on a frame.",
        ],
      },
      {
        heading: "Actor and affiliation context",
        body: [
          "Knowing what is being said is half the picture. Perspectivity also maps who is saying it — the actors, outlets, and affiliations behind a narrative — with confidence-scored ties.",
        ],
      },
    ],
    differentiators: [
      "Early signal, before a narrative goes viral",
      "Actor + affiliation context behind every narrative",
      "Transparent, source-backed evidence trail",
    ],
  },
  {
    slug: "stance-tracking",
    collection: "solutions",
    eyebrow: "Use Case · Stance & Affiliation Tracking",
    title: "Watch an actor's stance drift — and catch the contradictions.",
    metaTitle: "Stance Tracking & Affiliation Mapping | Perspectivity",
    metaDescription:
      "Track how politicians, outlets, and organizations shift their stance over time. Perspectivity flags softening, hardening, and contradictions, and maps affiliation networks with confidence scores.",
    intro:
      "People and outlets shift their positions over time — sometimes gradually, sometimes by contradicting themselves outright. Perspectivity tracks stance drift over months and flags the moments an actor softens, hardens, or contradicts a previous position.",
    sections: [
      {
        heading: "Stance over time",
        body: [
          "For any actor — a politician, an outlet, an organization — see how their stance on an issue migrates across supportive, neutral, and critical over time, with the exact moments of shift annotated.",
        ],
      },
      {
        heading: "Affiliation networks with confidence",
        body: [
          "Who is connected to whom? Perspectivity maps affiliation ties — ownership, funding, alliances — and scores each by confidence: confirmed, medium, or alleged. You see the structure behind the stance.",
        ],
      },
    ],
    differentiators: [
      "Longitudinal stance tracking with contradiction flags",
      "Confidence-scored affiliation networks",
      "Multilingual actor coverage, including Bangla-script outlets",
    ],
  },
];

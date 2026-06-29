import type { ContentPage } from "@/lib/content/types";

export const LEARN: ContentPage[] = [
  {
    slug: "what-is-media-bias",
    collection: "learn",
    eyebrow: "Learn · Media Literacy",
    title: "What is media bias, really?",
    metaTitle: "What Is Media Bias? (With Real Examples) | Perspectivity",
    metaDescription:
      "Media bias isn't just left vs right. It's the cumulative effect of which stories get covered, how they're framed, what's emphasized, and what's left out. A clear explainer with real framing examples.",
    intro:
      "Most people think of media bias as a left-versus-right label slapped on an outlet. In practice it is much more than that — it is the cumulative effect of dozens of small choices an outlet makes about which stories to cover, how to frame them, what to emphasize, and what to leave out.",
    sections: [
      {
        heading: "Bias is more than a political lean",
        body: [
          "An outlet's political leaning is the most visible kind of bias, but bias also shows up in story selection (what gets covered at all), sourcing (whose voices are included), word choice, placement, and omission — the facts that are quietly left out.",
        ],
        bullets: [
          "Coverage bias — which stories an outlet chooses to run or ignore",
          "Framing bias — the words, angle, and emphasis used to tell a story",
          "Omission bias — the relevant facts that are left out",
          "Source bias — which voices and experts are quoted",
        ],
      },
      {
        heading: "The same event, told five ways",
        body: [
          "Take a single policy event. One outlet headlines it as a victory, another as an overreach, a third as a dry procedural fact. None of them is strictly lying, yet a reader who sees only one comes away with a very different understanding of what happened. That gap — between the same event and very different stories about it — is where bias actually lives.",
        ],
      },
      {
        heading: "Why static ratings only go so far",
        body: [
          "A fixed bias rating tells you an outlet's general tendency. It cannot tell you how that outlet framed today's specific story. Reading the actual framing — per story, in real time — is what turns bias from a label into something you can actually see and compare.",
        ],
      },
      {
        heading: "How Perspectivity helps",
        body: [
          "Perspectivity reads each story across outlets and shows, per outlet, the headline used, what was emphasized, and what was left out — mapped on a Left-to-Right spectrum. The goal is not to tell you who to trust, but to make the framing visible so you can decide for yourself.",
        ],
      },
    ],
    differentiators: [
      "Per-story framing, not just a standing bias label",
      "Shows emphasis and omission per outlet",
      "Free to try on today's real stories",
    ],
    faq: [
      {
        q: "Can media bias ever be fully eliminated?",
        a: "No — every editorial choice involves some selection and emphasis. The realistic goal is not eliminating bias but making it visible and comparable, so readers can account for it.",
      },
      {
        q: "Is bias the same as misinformation?",
        a: "No. Misinformation is false information. Bias is a slant in how true information is selected and framed. An outlet can be biased while being factually accurate, and recognizing the difference matters.",
      },
      {
        q: "How does Perspectivity measure bias?",
        a: "Rather than one score, Perspectivity shows where an outlet sits on the spectrum and how it framed each specific story — with the headline, emphasis, and omission made explicit.",
      },
    ],
  },
  {
    slug: "how-news-framing-works",
    collection: "learn",
    eyebrow: "Learn · Media Literacy",
    title: "How news framing shapes what you believe.",
    metaTitle: "How News Framing Works (With Examples) | Perspectivity",
    metaDescription:
      "Framing is the quiet art of deciding which facts lead, which follow, and which disappear. Learn how news framing works — with real Left vs Right framing examples — and how to see past it.",
    intro:
      "Two reporters covering the exact same event can produce two very different stories without either of them lying. The mechanism is framing — the choices about which facts lead, which follow, and which fade away. Understanding framing is the single most useful media-literacy skill there is.",
    sections: [
      {
        heading: "The three levers of a frame",
        body: [
          "Almost every framing choice comes down to three levers: emphasis (which facts lead and get repeated), context (what background is supplied), and omission (what is left out). The combination is what makes a reader feel a certain way about a story.",
        ],
        bullets: [
          "Emphasis — the words and facts that lead the headline and opening lines",
          "Context — the background that frames how the event is interpreted",
          "Omission — the relevant facts that never appear",
          "Word choice — the loaded verbs and labels that carry judgment",
        ],
      },
      {
        heading: "Left vs Right framing, in practice",
        body: [
          "On a contested story, left-leaning outlets often emphasize harm to vulnerable groups or systemic causes, while right-leaning outlets often emphasize order, personal responsibility, or cost. Neither framing is invented — both select from real facts. The reader who sees only one side never learns which facts were quietly dropped.",
        ],
      },
      {
        heading: "Why reading several framings is the defense",
        body: [
          "The most reliable way past framing is not to find one 'unbiased' outlet — it is to read the same story across several framings and notice what each one emphasized and omitted. The patterns become obvious fast.",
        ],
      },
      {
        heading: "How Perspectivity makes framing visible",
        body: [
          "For any story, Perspectivity shows how outlets across the spectrum framed it — the headline each used, what each emphasized, and what each left out — so the framing becomes something you can compare at a glance instead of having to piece together alone.",
        ],
      },
    ],
    differentiators: [
      "Per-outlet emphasis and omission, side by side",
      "Real stories, updated as they develop",
      "Free to try on today's coverage",
    ],
    faq: [
      {
        q: "What's the difference between bias and framing?",
        a: "Bias is an outlet's general slant. Framing is the specific mechanism — the choices about emphasis, context, and omission — through which that slant shows up in a given story.",
      },
      {
        q: "Is framing always intentional?",
        a: "Not always. Some framing is a deliberate editorial choice, but much of it is unconscious — the habits, sources, and assumptions an outlet brings to a story. Either way, the effect on the reader is real.",
      },
    ],
  },
];

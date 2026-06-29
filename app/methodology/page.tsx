import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { Reveal } from "@/lib/motionfold";
import { LINKS } from "@/lib/links";
import { SITE_URL } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Methodology — How Perspectivity Detects Bias | OpenNewsInsight + BanglaLLM",
  description:
    "Perspectivity's bias detection runs on autonomous Bias-Agents built with the open-source OpenNewsInsight framework and BanglaLLM for multilingual coverage. See how our AI lean scoring differs from Ground News and AllSides.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    title: "How Perspectivity Detects Bias — Methodology",
    description:
      "Autonomous Bias-Agents on the open-source OpenNewsInsight framework, with BanglaLLM for Bangla. Open, multi-axis, real-time — vs the static manual ratings of Ground News and AllSides.",
    url: `${SITE_URL}/methodology`,
    type: "article",
  },
};

const STACK = [
  {
    badge: "Layer 1",
    title: "OpenNewsInsight framework",
    body: "The open-source news-insight framework that scrapes, aggregates, and analyzes regional news in real time. It performs multi-axis bias detection — beyond a single left/right label — and is reproducible by anyone.",
    href: LINKS.banglallmGitHub,
    cta: "Explore the open-source repos",
  },
  {
    badge: "Layer 2",
    title: "Autonomous Bias-Agents",
    body: "AI agents read the actual content of each story — the framing, the emphasis, the omissions — and score bias per article, not per outlet. Because agents read content, the score reflects how a story was actually told, not an outlet's static reputation.",
    href: LINKS.perspectivity,
    cta: "See it on today's stories",
  },
  {
    badge: "Layer 3",
    title: "BanglaLLM",
    body: "Our open multilingual models (BongLLaMA and family) power Bangla-language analysis for Drishtikon in Bangladesh — so bias detection isn't English-only. Coverage in low-resource languages is the moat incumbents can't match.",
    href: "/research",
    cta: "Read the BanglaLLM research",
  },
];

const COMPARISON_ROWS: { label: string; gn: boolean | string; as: boolean | string; pv: boolean | string }[] = [
  { label: "How scoring works", gn: "Static, manual per-outlet ratings", as: "Manual, credit-gated checks", pv: "AI Bias-Agents read content, per-story" },
  { label: "Real-time", gn: false, as: false, pv: true },
  { label: "Multi-axis (beyond left/right)", gn: false, as: false, pv: true },
  { label: "Multilingual (e.g. Bangla)", gn: false, as: false, pv: true },
  { label: "Open-source methodology", gn: false, as: false, pv: true },
];

const FAQS = [
  {
    q: "How does Perspectivity detect bias?",
    a: "Autonomous Bias-Agents built on the open-source OpenNewsInsight framework read the actual content of each story — the framing, the words, the emphasis, and the omissions — and score bias per article. Because the agents read content rather than relying on an outlet's fixed reputation, the score reflects how a story was genuinely told.",
  },
  {
    q: "What is the OpenNewsInsight framework?",
    a: "It's the open-source news-insight framework Perspectivity is built on. It scrapes, aggregates, and analyzes regional news in real time and performs multi-axis bias detection. Being open-source means the methodology is inspectable and reproducible — you can check how a result was produced, not just trust a black-box score.",
  },
  {
    q: "How is your scoring different from Ground News or AllSides?",
    a: "Ground News relies on static, manual per-outlet ratings; AllSides uses credit-gated manual checks. Both assign each outlet a fixed leaning. Perspectivity's AI Bias-Agents read the content of each story and score it in real time — so you see how an outlet framed today's article, not just where it sits on a chart. We also score across multiple axes, not only left versus right.",
  },
  {
    q: "Is Perspectivity's scoring just left vs. right?",
    a: "No. The OpenNewsInsight framework performs multi-axis bias detection — political lean is one axis, but framing, emphasis, omission, tone, and source selection are all part of the analysis. A single left/right label hides most of how a story is actually shaped.",
  },
  {
    q: "What is BanglaLLM and how does it power Drishtikon?",
    a: "BanglaLLM is our open family of Bangla language models (including BongLLaMA), backed by peer-reviewed research and published models and datasets on Hugging Face. It powers Drishtikon, our Bangladesh consumer app, letting Bias-Agents read Bangla-language coverage natively — something English-first competitors simply cannot do.",
  },
  {
    q: "Is the methodology open source and peer-reviewed?",
    a: "The framework is open-source, and the underlying language research has been published at peer-reviewed venues (EACL / AACL) with papers on arXiv. You can inspect the code and read the research, not just take our word for a score.",
  },
  {
    q: "Can I see the sources behind a score?",
    a: "Yes. Perspectivity is source-backed — every framing and every score traces back to real coverage you can click through and read yourself. Transparency is the point: a score you can't audit isn't trust, it's a black box.",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Perspectivity Detects Bias — Methodology",
  description:
    "Autonomous Bias-Agents on the open-source OpenNewsInsight framework, with BanglaLLM for multilingual coverage. Open, multi-axis, real-time.",
  author: { "@type": "Organization", name: "Perspectivity" },
  publisher: { "@type": "Organization", name: "Perspectivity" },
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Cell = ({ value, positive }: { value: boolean | string; positive?: boolean }) => {
  if (typeof value === "string") return <span className="font-hanken text-[14px] text-navy leading-snug">{value}</span>;
  return value ? (
    <Check className="w-5 h-5 text-primary-600 mx-auto" />
  ) : (
    <Minus className="w-4 h-4 text-secondary-300 mx-auto" />
  );
};

export default function MethodologyPage() {
  return (
    <PageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(110,231,183,0.12) 0%, rgba(22,39,63,0) 60%)" }}
        />
        <div className="relative container mx-auto px-5 sm:px-6 max-w-[900px] pt-32 sm:pt-40 pb-16 sm:pb-24">
          <nav className="font-hanken text-[12px] text-white/45 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/65">Methodology</span>
          </nav>
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
            Methodology · open &amp; transparent
          </p>
          <h1 className="font-serif text-white text-[34px] sm:text-[52px] leading-[1.06] tracking-[-0.02em] mb-5">
            How Perspectivity reads bias &mdash; and why you can check it.
          </h1>
          <p className="font-hanken text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            Perspectivity is AI-native and open. Bias is detected by autonomous <span className="text-white font-medium">Bias-Agents</span> built on the open-source <span className="text-white font-medium">OpenNewsInsight framework</span>, with <span className="text-white font-medium">BanglaLLM</span> powering Bangla coverage for Drishtikon. Everything is reproducible.
          </p>
        </div>
      </section>

      {/* THE STACK */}
      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[1080px] py-20 sm:py-28">
          <Reveal className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-serif text-navy text-[28px] sm:text-[36px] tracking-[-0.01em] mb-3">The stack</h2>
            <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
              Three open layers, from the raw framework to the language models that let it read more than English.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {STACK.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 0.08, 0.2)}>
                <div className="rounded-2xl border border-line bg-surface-secondary p-6 sm:p-7 h-full flex flex-col">
                  <p className="font-hanken text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3">{s.badge}</p>
                  <h3 className="font-serif text-navy text-[22px] tracking-[-0.01em] mb-3">{s.title}</h3>
                  <p className="font-hanken text-[14.5px] text-secondary-500 leading-relaxed flex-1">{s.body}</p>
                  <Link
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 font-hanken text-[13px] font-semibold text-navy mt-5 w-fit"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-surface-secondary">
        <div className="container mx-auto px-5 sm:px-6 max-w-[1000px] py-20 sm:py-28">
          <Reveal className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-serif text-navy text-[28px] sm:text-[36px] tracking-[-0.01em] mb-3">
              How our scoring differs
            </h2>
            <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
              Ground News uses static manual ratings; AllSides uses credit-gated manual checks. Perspectivity's agents read content in real time &mdash; across more axes and more languages.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th className="font-hanken text-[12px] font-semibold tracking-[0.14em] uppercase text-secondary-400 p-4 sm:p-5">&nbsp;</th>
                    <th className="font-hanken text-[13px] font-semibold text-navy p-4 sm:p-5">Ground News</th>
                    <th className="font-hanken text-[13px] font-semibold text-navy p-4 sm:p-5">AllSides</th>
                    <th className="font-hanken text-[13px] font-semibold text-white bg-navy p-4 sm:p-5 rounded-t-xl">Perspectivity</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-line last:border-b-0">
                      <td className="font-hanken text-[13px] font-medium text-navy p-4 sm:p-5 align-middle">{r.label}</td>
                      <td className="p-4 sm:p-5 align-middle text-center"><Cell value={r.gn} /></td>
                      <td className="p-4 sm:p-5 align-middle text-center"><Cell value={r.as} /></td>
                      <td className="p-4 sm:p-5 align-middle text-center bg-navy/5"><Cell value={r.pv} positive /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[780px] py-20 sm:py-28">
          <Reveal className="mb-8">
            <h2 className="font-serif text-navy text-[28px] sm:text-[36px] tracking-[-0.01em] mb-3">
              Methodology, in plain language
            </h2>
            <p className="font-hanken text-base text-secondary-500 leading-relaxed">
              The questions a careful reader (or an AI assistant) should ask before trusting a bias score.
            </p>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <p className="font-serif text-navy text-lg sm:text-xl leading-snug mb-2">{f.q}</p>
                <p className="font-hanken text-secondary-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl bg-navy p-7 sm:p-8 text-center">
              <p className="font-serif text-white text-xl sm:text-2xl mb-2">A score you can&apos;t audit isn&apos;t trust &mdash; it&apos;s a black box.</p>
              <p className="font-hanken text-white/70 mb-6">Open-source framework. Peer-reviewed language models. Source-backed scores.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={LINKS.perspectivity} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5">
                  <span>Analyze Today&apos;s News &mdash; Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/research" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-hanken font-medium text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10">
                  Read the research
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}

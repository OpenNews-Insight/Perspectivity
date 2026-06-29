import { FC } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import { LINKS } from "@/lib/links";
import type { ContentPage, ContentCollection } from "@/lib/content/types";

const COLLECTION_LABEL: Record<ContentCollection, string> = {
  solutions: "Solutions",
  alternatives: "Alternatives",
  learn: "Learn",
};

interface Props {
  page: ContentPage;
}

export const ContentPageView: FC<Props> = ({ page }) => {
  const isComparison = page.collection === "alternatives";
  const ctaPrimary = isComparison ? "Analyze Today's News — Free" : "Analyze Today's News — Free";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perspectivity.co/" },
      { "@type": "ListItem", position: 2, name: COLLECTION_LABEL[page.collection], item: `https://perspectivity.co/${page.collection}` },
      { "@type": "ListItem", position: 3, name: page.title },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    author: { "@type": "Organization", name: "Perspectivity" },
    publisher: { "@type": "Organization", name: "Perspectivity" },
  };
  const faqLd = page.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* HERO */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(110,231,183,0.10) 0%, rgba(22,39,63,0) 60%)" }}
        />
        <div className="relative container mx-auto px-5 sm:px-6 max-w-[860px] pt-32 sm:pt-40 pb-14 sm:pb-20">
          {/* breadcrumb */}
          <nav className="font-hanken text-[12px] text-white/45 mb-6 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${page.collection}`} className="hover:text-white/80 transition-colors">{COLLECTION_LABEL[page.collection]}</Link>
            <span>/</span>
            <span className="text-white/65">{page.slug}</span>
          </nav>
          <Reveal>
            <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
              {page.eyebrow}
            </p>
            <h1 className="font-serif text-white text-[32px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] mb-5">
              {page.title}
            </h1>
            <p className="font-hanken text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
              {page.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              <Link
                href={LINKS.perspectivity}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href={LINKS.demoRequest}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-hanken font-medium text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[760px] py-20 sm:py-28">
          {page.sections.map((s, i) => (
            <Reveal key={i} className="mb-12 last:mb-0">
              <h2 className="font-serif text-navy text-[24px] sm:text-[28px] leading-tight tracking-[-0.01em] mb-4">
                {s.heading}
              </h2>
              {s.body?.map((p, j) => (
                <p key={j} className="font-hanken text-[16px] sm:text-[17px] text-secondary-500 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-3 space-y-2.5">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 font-hanken text-[16px] text-secondary-500 leading-relaxed">
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {/* differentiators */}
          {page.differentiators && (
            <Reveal className="mt-14 rounded-2xl bg-surface-secondary border border-line p-7 sm:p-8">
              <p className="font-hanken text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-600 mb-4">
                Why Perspectivity
              </p>
              <ul className="space-y-3">
                {page.differentiators.map((d, i) => (
                  <li key={i} className="flex gap-3 font-hanken text-[15.5px] text-navy leading-relaxed">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* FAQ */}
          {page.faq && (
            <div className="mt-14">
              <h2 className="font-serif text-navy text-[24px] sm:text-[28px] tracking-[-0.01em] mb-5">
                Frequently asked
              </h2>
              <div className="space-y-3">
                {page.faq.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                    <p className="font-serif text-navy text-lg sm:text-xl leading-snug mb-2">{f.q}</p>
                    <p className="font-hanken text-secondary-500 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.12) 0%, rgba(22,39,63,0) 60%)" }}
        />
        <div className="relative container mx-auto px-5 sm:px-6 max-w-[800px] py-20 sm:py-24 text-center">
          <h2 className="font-serif text-white text-[28px] sm:text-[38px] leading-tight tracking-[-0.02em] mb-5">
            See how every outlet frames today&apos;s stories.
          </h2>
          <p className="font-hanken text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Free to try, across hundreds of sources, in English and Bangla.
          </p>
          <Link
            href={LINKS.perspectivity}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Analyze Today&apos;s News — Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContentPageView;

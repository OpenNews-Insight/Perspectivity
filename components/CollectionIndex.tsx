import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import type { ContentPage, ContentCollection } from "@/lib/content/types";

const COPY: Record<ContentCollection, { eyebrow: string; title: string; intro: string }> = {
  solutions: {
    eyebrow: "Solutions",
    title: "Narrative intelligence for every team that has to read the news critically.",
    intro:
      "From election integrity to crisis communications, Perspectivity maps how narratives form, who pushes them, and how they move. Explore the use cases the platform is built for.",
  },
  alternatives: {
    eyebrow: "Alternatives",
    title: "Comparing Perspectivity to the tools you already know.",
    intro:
      "Honest, side-by-side comparisons with the consumer and institutional platforms in our space — what each is built for, and where Perspectivity is different.",
  },
  learn: {
    eyebrow: "Learn",
    title: "Media-literacy explainers that AI assistants can cite.",
    intro:
      "Clear, accurate explainers on media bias, framing, and narrative structure — written to be the answer, not to chase a keyword.",
  },
};

interface Props {
  collection: ContentCollection;
  pages: ContentPage[];
}

const CollectionIndex: FC<Props> = ({ collection, pages }) => {
  const c = COPY[collection];
  return (
    <main className="overflow-x-clip">
      <section className="relative bg-navy-deep overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(110,231,183,0.10) 0%, rgba(22,39,63,0) 60%)" }}
        />
        <div className="relative container mx-auto px-5 sm:px-6 max-w-[1000px] pt-32 sm:pt-40 pb-14 sm:pb-20">
          <nav className="font-hanken text-[12px] text-white/45 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/65">{collection}</span>
          </nav>
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">{c.eyebrow}</p>
          <h1 className="font-serif text-white text-[32px] sm:text-[46px] leading-[1.08] tracking-[-0.02em] mb-5 max-w-3xl">{c.title}</h1>
          <p className="font-hanken text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">{c.intro}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[1000px] py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-5">
            {pages.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link
                  href={`/${collection}/${p.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-white hover:border-primary-400 transition-all duration-300 p-7 sm:p-8 hover:shadow-[0_20px_50px_-30px_rgba(22,39,63,0.4)]"
                >
                  <p className="font-hanken text-[11px] font-semibold tracking-[0.18em] uppercase text-primary-600 mb-3">{p.eyebrow}</p>
                  <h2 className="font-serif text-navy text-[22px] sm:text-[24px] leading-snug tracking-[-0.01em] mb-3">{p.title}</h2>
                  <p className="font-hanken text-[15px] text-secondary-500 leading-relaxed mb-4 line-clamp-3">{p.intro}</p>
                  <span className="inline-flex items-center gap-1.5 font-hanken text-[13px] font-semibold text-navy">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionIndex;

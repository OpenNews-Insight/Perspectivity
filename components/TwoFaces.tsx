import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import { LINKS } from "@/lib/links";

type CardData = {
  badge: string;
  tier: string;
  title: string;
  points: string[];
  cta: string;
  href: string;
};

const TwoFaces: FC = () => {
  const consumer: CardData = {
    badge: "Public app",
    tier: "B2C · Free",
    title: "The news app",
    points: [
      "Multi-perspective news with a Narrative tab",
      "Drives reach and the data flywheel",
      "Consumer Pro upsell",
      "Live on iOS + Android — Perspectivity + Drishtikon",
    ],
    cta: "Try the app",
    href: LINKS.perspectivity,
  };
  const institutional: CardData = {
    badge: "Institutional layer",
    tier: "B2B · Paid",
    title: "The terminal",
    points: [
      "Actor graphs and narrative timelines",
      "API, dashboards, and historical query",
      "For newsrooms, election monitors, NGOs, and platforms",
      "Where the revenue lives",
    ],
    cta: "Request a demo",
    href: LINKS.demoRequest,
  };

  const Card = ({ data, highlight }: { data: CardData; highlight?: boolean }) => (
    <div
      className={`rounded-3xl p-7 sm:p-9 flex flex-col h-full ${
        highlight ? "bg-navy text-white shadow-[0_40px_90px_-40px_rgba(22,39,63,0.6)]" : "bg-white border border-line"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={`font-hanken text-[11px] font-semibold tracking-[0.18em] uppercase ${highlight ? "text-[#6EE7B7]" : "text-primary-600"}`}>
          {data.badge}
        </span>
        <span className={`font-hanken text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full ${highlight ? "bg-white/10 text-white/80" : "bg-surface-secondary text-secondary-500"}`}>
          {data.tier}
        </span>
      </div>
      <h3 className={`font-serif text-[26px] sm:text-[30px] leading-tight tracking-[-0.01em] mb-5 ${highlight ? "text-white" : "text-navy"}`}>
        {data.title}
      </h3>
      <ul className="space-y-3 mb-8 flex-1">
        {data.points.map((p) => (
          <li key={p} className={`flex gap-3 font-hanken text-[15px] leading-relaxed ${highlight ? "text-white/85" : "text-secondary-500"}`}>
            <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${highlight ? "bg-[#6EE7B7]" : "bg-primary-500"}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <Link
        href={data.href}
        target={data.href.startsWith("http") ? "_blank" : undefined}
        rel={data.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`group inline-flex items-center gap-2 font-hanken text-[14px] font-semibold w-fit ${
          highlight ? "text-white" : "text-navy"
        }`}
      >
        <span>{data.cta}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );

  return (
    <section id="two-faces" className="relative overflow-hidden bg-surface-secondary">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1080px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">
            Business model
          </p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[46px] sm:leading-[1.06] tracking-[-0.02em] mb-4">
            Two faces. <span className="italic text-primary-600">One engine.</span>
          </h2>
          <p className="font-serif text-navy text-lg sm:text-xl italic leading-relaxed">
            The Bloomberg model &mdash; free news on the surface, the terminal underneath.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          <Reveal>
            <Card data={consumer} />
          </Reveal>
          <Reveal delay={0.1}>
            <Card data={institutional} highlight />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TwoFaces;

"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState, useMemo } from "react";
import { LINKS } from "@/lib/links";
import SectionBackdrop from "@/components/SectionBackdrop";

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sections = useMemo(
    () => [
      {
        title: "Product",
        links: [
          { label: "Perspectivity (US)", href: LINKS.perspectivity },
          { label: "Drishtikon (Bangladesh)", href: LINKS.drishtikon },
        ],
      },
      {
        title: "Socials",
        links: [
          { label: "YouTube", href: LINKS.youtube },
          { label: "Facebook", href: LINKS.facebook },
          { label: "LinkedIn", href: LINKS.linkedinCompany },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "FAQ", href: "/#faq" },
          { label: "Demo", href: "/#demo" },
          { label: "Team", href: "/#team" },
          { label: "Research", href: "/research" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "BanglaLLM Paper", href: LINKS.arxivPaper },
          { label: "Read Between the Lines", href: LINKS.readBetweenLinesArxiv },
          { label: "Hugging Face", href: LINKS.huggingFace },
          { label: "GitHub", href: LINKS.github },
        ],
      },
    ],
    [],
  );

  return (
    <footer ref={ref} className="relative overflow-hidden bg-navy-deep text-white">
      <SectionBackdrop image="/assets/images/hero-press-room.jpg" dark />
      <div className="relative z-10 container mx-auto w-full px-5 sm:px-6 max-w-[1180px] py-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* brand */}
          <div>
            <div className="relative w-9 h-9 rounded-lg overflow-hidden mb-5">
              <Image src="/assets/logo.png" alt="Perspectivity logo" fill className="object-contain" priority />
            </div>
            <p className="font-serif text-white text-xl leading-snug mb-3">
              News is only the surface.
            </p>
            <p className="font-hanken text-[14px] text-white/55 leading-relaxed max-w-xs">
              Real-time AI media-bias and narrative intelligence. Exposing how
              stories are framed so you can think for yourself.
            </p>
          </div>

          {/* link columns */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h4 className="font-hanken text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-4">
                  {s.title}
                </h4>
                <ul className="space-y-2.5">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={l.href.startsWith("/") ? undefined : "_blank"}
                        rel={l.href.startsWith("/") ? undefined : "noopener noreferrer"}
                        className="font-hanken text-[14px] text-white/75 hover:text-[#6EE7B7] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-hanken text-[13px] text-white/45">
            © {new Date().getFullYear()} Perspectivity. All rights reserved.
          </p>
          <p className="font-hanken text-[12px] text-white/35 italic">
            Palantir for narratives. A Bloomberg terminal for public discourse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

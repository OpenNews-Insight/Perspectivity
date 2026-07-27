"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, FolderOpen, LinkIcon, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import { LINKS } from "@/lib/links";

interface Founder {
  name: string;
  role: string;
  description: string;
  image: string;
  achievements?: string[];
  links: { label: string; href: string }[];
}

// Download counts come from the Hugging Face API for the BanglaLLM org: 35,301
// all-time across 31 models. Stated as 30k+ so it stays true as it moves.
const founders: Founder[] = [
  {
    name: "Abdullah Khan Zehady",
    role: "Founder & CEO",
    description: "ML infrastructure builder and LLM engineer. Published peer-reviewed research on multilingual NLP for media analysis and released open-source language models used by researchers worldwide.",
    image: "/assets/images/team/aninda.jpeg",
    achievements: ["Open-source LLMs for media bias analysis", "BanglaLlama paper on arXiv", "30k+ downloads across 31 open models"],
    links: [
      { label: "X / Twitter", href: LINKS.founderTwitter },
      { label: "LinkedIn", href: LINKS.founderLinkedin },
    ],
  },
  {
    name: "Nick Scipione",
    role: "Co-Founder",
    description: "AI Engineer based in Austin, Texas. Came to AI from Chemical Engineering at Northeastern University, graduating in 2021, and works day to day in Python and data analytics.",
    image: "/assets/images/team/nick-scipione.jpg",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nickolas-scipione/" },
      { label: "GitHub", href: "https://github.com/nickscip" },
    ],
  },
];

const journey = [
  { icon: BookOpen, title: "Research foundation", desc: "Peer-reviewed multilingual NLP research for media analysis." },
  { icon: FolderOpen, title: "Open-source impact", desc: "Language models on Hugging Face with 30k+ downloads." },
  { icon: LinkIcon, title: "Live products", desc: "Perspectivity worldwide and Drishtikon in Bangladesh, processing hundreds of sources in real time." },
];

const milestones = [
  { period: "Q3 2026", title: "iOS & Android apps out of beta" },
  { period: "Q4 2026", title: "Enterprise API for media monitoring and intelligence" },
  { period: "Q1 2027", title: "Open-source bias detection framework for researchers" },
];

const TeamSection: FC = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-navy-deep text-white">
      <SectionBackdrop image="/assets/images/eanat/actor.jpg" dark />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
            Meet the founders
          </p>
          <h2 className="font-serif text-white text-[34px] leading-[1.1] sm:text-[44px] sm:leading-[1.08] tracking-[-0.02em]">
            Building the future of <span className="italic text-[#6EE7B7]">media transparency.</span>
          </h2>
        </Reveal>

        <div className="space-y-5 mb-16">
          {founders.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <div className="grid md:grid-cols-[280px_1fr] gap-8 items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-navy">
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-white text-2xl sm:text-3xl mb-1">{person.name}</h3>
                  <p className="font-hanken text-[#6EE7B7] font-semibold text-[15px] mb-4">{person.role}</p>
                  <p className="font-hanken text-white/65 leading-relaxed mb-5">{person.description}</p>
                  {person.achievements && (
                    <ul className="space-y-2 mb-6">
                      {person.achievements.map((a) => (
                        <li key={a} className="font-hanken text-[14px] text-white/80 flex items-start gap-2.5">
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-[#6EE7B7] flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex gap-4">
                    {person.links.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-hanken text-[13px] font-semibold text-white/80 hover:text-[#6EE7B7] inline-flex items-center gap-1"
                      >
                        {l.label} <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-4"><h3 className="font-serif text-white text-2xl sm:text-3xl mb-2">Our journey so far</h3></Reveal>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="w-11 h-11 rounded-xl bg-[#6EE7B7]/10 grid place-items-center mb-4">
                  <j.icon className="w-5 h-5 text-[#6EE7B7]" />
                </div>
                <h4 className="font-serif text-white text-lg mb-1.5">{j.title}</h4>
                <p className="font-hanken text-[14px] text-white/55 leading-relaxed">{j.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-4"><h3 className="font-serif text-white text-2xl sm:text-3xl">Next milestones</h3></Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {milestones.map((m, i) => (
            <Reveal key={m.period} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 pl-7">
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#6EE7B7]" />
                <p className="font-hanken text-[12px] font-semibold tracking-[0.14em] uppercase text-[#6EE7B7] mb-2">{m.period}</p>
                <p className="font-hanken text-white/80 leading-snug">{m.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

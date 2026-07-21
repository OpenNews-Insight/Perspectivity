"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import { cn } from "@/utils";

const BottomCTA: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#6EE7B7] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#6EE7B7] rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-5 py-16 sm:py-24">
        <h2
          className={cn(
            "font-serif text-heading-3-semibold text-white mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Want to join our{" "}
          <span className="italic text-[#6EE7B7]">mission</span>?
        </h2>
        <p
          className={cn(
            "font-hanken text-paragraph-lg-regular text-white/65 mb-8 max-w-lg mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          We&apos;re always looking for passionate people who care about
          transparent journalism and AI for social good.
        </p>
        <Link
          href={LINKS.supportEmail}
          className={cn(
            "inline-flex items-center font-hanken bg-white hover:bg-white/90 text-navy rounded-full px-6 py-3 text-paragraph-md-medium transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95",
          )}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default BottomCTA;

"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/links";

interface ProductCard {
  name: string;
  logo: string;
  logoAlt: string;
  description: string;
  cta: string;
  href: string;
}

const products: ProductCard[] = [
  {
    name: "Perspectivity",
    logo: "/assets/logo_perspectivity.jpeg",
    logoAlt: "Perspectivity",
    description:
      "Multi-perspective analysis platform for understanding complex information. Real-time insights powered by research-grade language models.",
    cta: "Visit Perspectivity",
    href: LINKS.perspectivity,
  },
  {
    name: "Drishtikon",
    logo: "/assets/logo_drishtikon.jpeg",
    logoAlt: "Drishtikon",
    description:
      "Bengali news-literacy platform with real-time bias detection. Multi-perspective analysis and source transparency for informed readers.",
    cta: "Visit Drishtikon",
    href: LINKS.drishtikon,
  },
];

const DrishtionSpotlightSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-secondary-950 px-5 sm:px-10 md:px-20 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
      {/* Dot mesh background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.1) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full opacity-5 blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-amber-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-paragraph-sm-medium text-primary-400 uppercase tracking-wider mb-3">
            Research in Production
          </p>
          <h2 className="text-heading-2-semibold text-white">
            Powering Real-World Impact
          </h2>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={cn(
                "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              {/* Logo */}
              <div className="w-20 h-20 rounded-xl bg-secondary-800 border border-secondary-700 p-2 flex items-center justify-center overflow-hidden mb-5">
                <Image
                  src={product.logo}
                  alt={product.logoAlt}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-heading-4-semibold text-white mb-3">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-paragraph-md-regular text-secondary-300 mb-6 line-clamp-3">
                {product.description}
              </p>

              {/* CTA Button */}
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full px-5 py-2.5 text-paragraph-sm-medium transition-all duration-300 hover:scale-105"
              >
                {product.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrishtionSpotlightSection;

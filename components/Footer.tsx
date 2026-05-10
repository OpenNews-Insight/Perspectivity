"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { LINKS } from "@/lib/links";
import { cn } from "@/utils";

const Footer: FC = () => {
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
  const footerSections = useMemo(
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
          {
            label: "Youtube",
            href: LINKS.youtube,
          },
          {
            label: "Facebook",
            href: LINKS.facebook,
          },
          {
            label: "Linkedin",
            href: LINKS.linkedinCompany,
          },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "FAQ", href: "/#faq" },
          { label: "Feedback", href: "/#feedback" },
          { label: "Research", href: "/research" },
          { label: "Team", href: "/teams" },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "BanglaLlama Paper",
            href: LINKS.arxivPaper,
          },
          {
            label: "Read Between the Lines",
            href: LINKS.googleScholar,
          },
          { label: "Hugging Face", href: LINKS.huggingFace },
          { label: "GitHub", href: LINKS.github },
        ],
      },
    ],
    []
  );

  return (
    <footer ref={ref} className="bg-gray-50 py-12 px-5 sm:px-10 md:px-20">
      <div className="container mx-auto w-full">
        {/* TODO: Wire up newsletter form with backend before uncommenting
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4 sm:mb-12">
          <div>
            <p className="text-paragraph-md-medium text-secondary-500">
              Join our newsletter
            </p>
            <p className="text-paragraph-md-regular text-secondary-600">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="text-paragraph-md-regular border border-secondary-300 px-4 py-2.5 w-full sm:w-auto focus:outline-none rounded-full"
            />
            <button className="bg-secondary-900 rounded-full transition-all duration-300 hover:bg-secondary-800 flex items-center text-paragraph-md-medium text-base-white px-3 py-2.5 w-full sm:w-auto justify-center">
              Subscribe
            </button>
          </form>
        </div>
        */}

        <div className={cn(
          "py-6 sm:py-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="relative w-8 h-8 bg-secondary-950 rounded-lg mb-6">
                <Link
                  href={"#"}
                  target="_blank"
                  className="text-paragraph-md-semibold text-secondary-500 hover:text-secondary-900 whitespace-nowrap"
                >
                  <Image
                    src="/assets/logo.png"
                    alt="Perspectivity Logo"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </Link>
              </div>
              <p className="text-paragraph-md-medium text-secondary-500">
                Real‑time AI media bias analysis. Exposing how narratives
                are framed so you can think for yourself.
              </p>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-8 w-full">
              {footerSections.map((section) => (
                <div key={section.title} className="flex-1 min-w-[150px]">
                  <h3 className="text-secondary-600 text-paragraph-sm-medium mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          target="_blank"
                          className="text-paragraph-md-semibold text-secondary-500 hover:text-secondary-900 whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cn(
          "flex flex-col sm:flex-row justify-center items-center border-t border-secondary-100 pt-8 gap-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
          <p className="text-paragraph-md-regular text-secondary-600">
            &copy; {new Date().getFullYear()} Perspectivity. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

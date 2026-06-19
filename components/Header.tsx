"use client";

import { useState, FC, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Globe, Menu } from "lucide-react";
import { LINKS } from "@/lib/links";

const products = [
  {
    name: "Perspectivity",
    region: "United States",
    href: LINKS.perspectivity,
    flag: (
      <svg viewBox="0 0 36 36" className="w-5 h-5 rounded-sm" aria-hidden>
        <rect fill="#B22234" width="36" height="36" />
        <rect fill="#fff" y="2.77" width="36" height="2.77" />
        <rect fill="#fff" y="8.31" width="36" height="2.77" />
        <rect fill="#fff" y="13.85" width="36" height="2.77" />
        <rect fill="#fff" y="19.38" width="36" height="2.77" />
        <rect fill="#fff" y="24.92" width="36" height="2.77" />
        <rect fill="#fff" y="30.46" width="36" height="2.77" />
        <rect fill="#3C3B6E" width="15.12" height="19.38" />
      </svg>
    ),
  },
  {
    name: "Drishtikon",
    region: "Bangladesh",
    href: LINKS.drishtikon,
    flag: (
      <svg viewBox="0 0 36 36" className="w-5 h-5 rounded-sm" aria-hidden>
        <rect fill="#006A4E" width="36" height="36" rx="2" />
        <circle fill="#F42A41" cx="16" cy="18" r="8" />
      </svg>
    ),
  },
];

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sectionIds = ["problem", "platform", "features", "demo", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-30% 0px -65% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const socialLinks = useMemo(
    () => [
      { name: "YouTube", href: LINKS.youtube, hoverBg: "hover:bg-[#FF0000]", icon: (<svg className="w-4 h-4 fill-[#FF0000] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
      { name: "Facebook", href: LINKS.facebook, hoverBg: "hover:bg-[#1877F2]", icon: (<svg className="w-4 h-4 fill-[#1877F2] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
      { name: "LinkedIn", href: LINKS.linkedinCompany, hoverBg: "hover:bg-[#0A66C2]", icon: (<svg className="w-4 h-4 fill-[#0A66C2] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>) },
    ],
    []
  );

  const navItems = useMemo(
    () => [
      { name: "Problem", href: "/#problem", sectionId: "problem" },
      { name: "Solution", href: "/#features", sectionId: "features" },
      { name: "Demo", href: "/#demo", sectionId: "demo" },
      { name: "Research", href: "/research", sectionId: "research" },
      { name: "Team", href: "/#team", sectionId: "team" },
    ],
    []
  );

  return (
    <header className="fixed top-0 sm:top-6 left-0 right-0 z-50 transition-all duration-300 bg-transparent px-3">
      <nav className="mx-auto w-full max-w-[1062px] z-50 transition-all duration-300 bg-navy-deep/70 backdrop-blur-md border border-white/10 rounded-none sm:rounded-full p-3 sm:p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-white/5 rounded-lg">
              <Image src="/assets/logo.png" alt="Perspectivity Logo" fill className="object-contain rounded-lg" priority />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.sectionId)}
                className={`font-hanken text-[15px] font-medium transition-colors duration-200 ${
                  activeSection === item.sectionId ? "text-[#6EE7B7]" : "text-white/65 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3 relative" ref={dropdownRef}>
            <div className="flex items-center gap-1 pr-3 border-r border-white/10">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`group/social w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 ${social.hoverBg} transition-all duration-200`}>
                  {social.icon}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white rounded-full transition-all duration-300 hover:bg-white/90 flex items-center gap-2 font-hanken font-semibold text-navy px-4 py-2.5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[14px]">Try Now</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-navy-deep/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden z-50">
                <div className="p-2">
                  {products.map((product) => (
                    <Link key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">{product.flag}</div>
                      <div className="flex flex-col">
                        <span className="font-hanken font-medium text-white text-[15px]">{product.name}</span>
                        <span className="font-hanken text-[13px] text-white/45">{product.region}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* mobile: compact socials + Try Now (nav links stay in the hamburger menu) */}
          <div className="flex md:hidden items-center gap-1.5">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`group/social w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 ${social.hoverBg} transition-all duration-200 [&_svg]:w-3.5 [&_svg]:h-3.5`}>
                {social.icon}
              </Link>
            ))}
            <Link href={LINKS.perspectivity} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full font-hanken font-semibold text-navy px-3.5 py-2 text-[13px] inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Try Now
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white transition-colors" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-navy-deep/95 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="font-hanken text-white/70 hover:text-white text-[15px] font-medium transition-colors duration-200">{item.name}</Link>
              ))}
              <div className="flex items-center gap-1 pt-2 border-t border-white/10">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`group/social w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 ${social.hoverBg} transition-all duration-200`}>{social.icon}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <p className="font-hanken text-[13px] font-medium text-white/45 px-1">Try Now</p>
                {products.map((product) => (
                  <Link key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">{product.flag}</div>
                    <div className="flex flex-col">
                      <span className="font-hanken font-medium text-white text-[15px]">{product.name}</span>
                      <span className="font-hanken text-[13px] text-white/45">{product.region}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

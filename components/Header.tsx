"use client";

import { useState, FC, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Globe } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState<string>("");
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
    const sectionIds = ["problem", "features", "demo", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const socialLinks = useMemo(
    () => [
      {
        name: "YouTube",
        href: LINKS.youtube,
        hoverBg: "hover:bg-[#FF0000]",
        icon: (
          <svg className="w-4 h-4 fill-[#FF0000] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden>
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        ),
      },
      {
        name: "Facebook",
        href: LINKS.facebook,
        hoverBg: "hover:bg-[#1877F2]",
        icon: (
          <svg className="w-4 h-4 fill-[#1877F2] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: LINKS.linkedinCompany,
        hoverBg: "hover:bg-[#0A66C2]",
        icon: (
          <svg className="w-4 h-4 fill-[#0A66C2] group-hover/social:fill-white transition-colors duration-200" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        ),
      },
    ],
    []
  );

  const navItems = useMemo(
    () => [
      { name: "Problem", href: "/#problem", sectionId: "problem" },
      { name: "Solution", href: "/#features", sectionId: "features" },
      { name: "Demo", href: "/#demo", sectionId: "demo" },
      { name: "Team", href: "/teams", sectionId: "team" },
    ],
    []
  );
  return (
    <header className="fixed top-0 sm:top-6 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav className="mx-auto w-full max-w-[1062px] z-50 transition-all duration-300 bg-base-white border border-gray-100 rounded-none sm:rounded-full p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-11 h-11 bg-secondary-950 rounded-lg">
              <Image
                src="/assets/logo.png"
                alt="Perspectivity Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-paragraph-md-medium transition-colors duration-200 ${
                  activeSection === item.sectionId
                    ? "text-primary-600"
                    : "text-secondary-500 hover:text-secondary-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3 relative" ref={dropdownRef}>
            <div className="flex items-center gap-1 pr-3 border-r border-gray-300">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`group/social w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 ${social.hoverBg} transition-all duration-200`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-secondary-900 rounded-full transition-all duration-300 hover:bg-secondary-800 flex items-center gap-2 text-paragraph-md-medium text-base-white px-4 py-2.5"
            >
              <Globe className="w-4 h-4" />
              <span>Try Now</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-base-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="p-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center transition-colors duration-200">
                        {product.flag}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-paragraph-md-medium text-secondary-900 group-hover:text-secondary-900 transition-colors duration-200">
                          {product.name}
                        </span>
                        <span className="text-paragraph-sm-regular text-secondary-500">
                          {product.region}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden  text-secondary-900 transition-colors text-paragraph-md-medium"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="relative w-6 h-6 text-secondary-900">
                <Image
                  src="/assets/icons/hamburger-menu.svg"
                  alt="Perspectivity Logo"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b shadow-lg transition-all duration-300 bg-base-white border border-gray-100">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-500 hover:text-secondary-900 text-paragraph-md-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`group/social w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 ${social.hoverBg} transition-all duration-200`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <p className="text-paragraph-sm-medium text-secondary-500 px-1">Try Now</p>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
                      {product.flag}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-paragraph-md-medium text-secondary-900">
                        {product.name}
                      </span>
                      <span className="text-paragraph-sm-regular text-secondary-500">
                        {product.region}
                      </span>
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

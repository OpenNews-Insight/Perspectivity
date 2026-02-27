"use client";

import { useState, FC, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Globe } from "lucide-react";

const products = [
  {
    name: "Perspectivity",
    region: "United States",
    href: "https://app.perspectivity.co/",
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
    href: "https://drishtikon.life",
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

  const navItems = useMemo(
    () => [
      { name: "Problem", href: "/#problem" },
      { name: "Solution", href: "/#features" },
      { name: "Demo", href: "/#demo" },
      { name: "Team", href: "/teams" },
    ],
    []
  );
  return (
    <header className="fixed top-0 sm:top-6 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav className="mx-auto w-full max-w-[1062px] z-50 transition-all duration-300 bg-base-white border border-primary-100 rounded-none sm:rounded-[9999px] p-4 shadow-primary-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-11 h-11 bg-primary-950 rounded-lg">
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
                className="text-secondary-700 hover:text-primary-600 text-paragraph-md-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3 relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105 flex items-center gap-2 text-paragraph-md-medium text-base-white px-4 py-[10px]"
            >
              <Globe className="w-4 h-4" />
              <span>Try Now</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-base-white rounded-2xl border border-primary-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="p-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors duration-200">
                        {product.flag}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-paragraph-md-medium text-secondary-800 group-hover:text-primary-600 transition-colors duration-200">
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
            className="md:hidden  text-primary-500 transition-colors text-paragraph-md-medium"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="relative w-6 h-6 text-primary-500">
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
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b shadow-lg transition-all duration-300 bg-base-white border border-primary-100">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-700 hover:text-primary-600 text-paragraph-md-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-2 border-t border-primary-100">
                <p className="text-paragraph-sm-medium text-secondary-500 px-1">Try Now</p>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center">
                      {product.flag}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-paragraph-md-medium text-secondary-800">
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

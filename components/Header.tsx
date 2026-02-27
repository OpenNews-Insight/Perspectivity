"use client";

import { useState, FC, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://drishtikon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105  flex items-center text-paragraph-md-medium text-base-white px-4 py-[10px]"
            >
              <span>Try Drishtokon</span>
            </Link>
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

              <Link
                href="https://drishtikon.life"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105  flex items-center text-paragraph-md-medium text-base-white px-4 py-[10px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Try Drishtokon</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useMemo } from "react";

const Footer: FC = () => {
  const footerSections = useMemo(
    () => [
      {
        title: "Product",
        links: [
          { label: "Drishtikon (Bangladesh)", href: "https://drishtikon.life" },
          { label: "Find Opportunities", href: "#" },
          { label: "Features", href: "#" },
          { label: "For Business", href: "#" },
          { label: "For Investors", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us", href: "#team" },
          { label: "Careers", href: "#" },
          { label: "Press", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Careers",
        links: [
          { label: "FAQ", href: "#" },
          { label: "Feedback", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Get Support", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "BongLLaMA", href: "#" },
          { label: "ArXiv Papers", href: "#" },
          { label: "GitHub", href: "#" },
        ],
      },
    ],
    []
  );

  return (
    <footer className="bg-surface-secondary py-12 px-20">
      <div className="w-full flex justify-between items-center mb-12">
        <div>
          <p className="text-paragraph-md-medium text-secondary-700">
            Join our newsletter
          </p>
          <p className="text-paragraph-md-regular text-secondary-600">
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form className="flex flex-row gap-2 items-center">
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className="text-paragraph-md-regular border border-secondary-300 px-4 py-[10px] flex-1 focus:outline-none rounded-[9999px]"
          />
          <button className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105 flex items-center text-paragraph-md-medium text-base-white px-3 py-[10px]">
            Subscribe
          </button>
        </form>
      </div>

      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <div className="relative w-8 h-8 bg-primary-950 rounded-lg mb-6">
              <Image
                src="/assets/logo.png"
                alt="Perspectivity Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <p className="text-paragraph-md-medium text-secondary-700">
              Real‑time AI news bias agent for emerging markets. Empowering
              democratic resilience through transparent journalism.
            </p>
          </div>

          <div className="col-span-2 flex flex-col md:flex-row gap-8 justify-between w-full">
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
                        className="text-paragraph-md-semibold text-secondary-700 hover:text-primary-500 whitespace-nowrap"
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
      <div className="flex justify-between border-t border-secondary-100 pt-8">
        <p className=" text-paragraph-md-regular text-secondary-600">
          &copy; 2025 Perspectivity. All rights reserved
        </p>
        <div className="flex gap-6 justify-center">
          <Link href="/" className="flex items-center space-x-3 ">
            <div className="relative w-6 h-6  rounded-lg">
              <Image
                src="/assets/icons/linkedin-icon.svg"
                alt="Linkedin Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-6 h-6 rounded-lg">
              <Image
                src="/assets/icons/x-icon.svg"
                alt="X Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-6 h-6  rounded-lg">
              <Image
                src="/assets/icons/facebook-icon.svg"
                alt="Facebook Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

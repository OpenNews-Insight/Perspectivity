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
          { label: "Features", href: "/#features" },
        ],
      },
      {
        title: "Socials",
        links: [
          {
            label: "Linkedin",
            href: "https://www.linkedin.com/company/banglallm/ ",
          },
          {
            label: "Youtube",
            href: "https://www.youtube.com/@Perspective1357",
          },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "FAQ", href: "/#faq" },
          { label: "Feedback", href: "/#feedback" },
          { label: "Team", href: "/teams" },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "BongLLaMA Paper",
            href: "https://arxiv.org/abs/2410.21200",
          },
          { label: "Hugging Face", href: "https://huggingface.co/BanglaLLM" },
          { label: "GitHub", href: "https://github.com/BanglaLLM/Drishtikon/" },
        ],
      },
    ],
    []
  );

  return (
    <footer className="bg-surface-secondary py-12 px-5 sm:px-10 md:px-20">
      <div className="container mx-auto w-full">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4 sm:mb-12">
          <div>
            <p className="text-paragraph-md-medium text-secondary-700">
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
              className="text-paragraph-md-regular border border-secondary-300 px-4 py-[10px] w-full sm:w-auto focus:outline-none rounded-[9999px]"
            />
            <button className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105 flex items-center text-paragraph-md-medium text-base-white px-3 py-[10px] w-full sm:w-auto justify-center">
              Subscribe
            </button>
          </form>
        </div>

        <div className="py-6 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="relative w-8 h-8 bg-primary-950 rounded-lg mb-6">
                <Link
                  href={"#"}
                  target="_blank"
                  className="text-paragraph-md-semibold text-secondary-700 hover:text-primary-500 whitespace-nowrap"
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
              <p className="text-paragraph-md-medium text-secondary-700">
                Real‑time AI news bias agent for emerging markets. Empowering
                democratic resilience through transparent journalism.
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

        <div className="flex flex-col sm:flex-row justify-center items-center border-t border-secondary-100 pt-8 gap-6">
          <p className="text-paragraph-md-regular text-secondary-600">
            &copy; 2025 Perspectivity. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FC } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const BottomCTA: FC = () => (
  <section className="relative bg-secondary-950 overflow-hidden">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="absolute top-0 left-1/3 w-72 h-72 bg-gray-400 rounded-full opacity-10 blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl" />

    <div className="relative z-10 max-w-3xl mx-auto text-center px-5 py-16 sm:py-24">
      <h2 className="text-heading-3-semibold text-white mb-4">
        Want to join our{" "}
        <span className="text-gray-300">mission</span>?
      </h2>
      <p className="text-paragraph-lg-regular text-secondary-300 mb-8 max-w-lg mx-auto">
        We&apos;re always looking for passionate people who care about
        transparent journalism and AI for social good.
      </p>
      <Link
        href={LINKS.supportEmail}
        className="inline-flex items-center bg-secondary-900 border border-secondary-700 rounded-full px-6 py-3 text-paragraph-md-medium text-base-white hover:bg-secondary-800 transition-all duration-300"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export default BottomCTA;

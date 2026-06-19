"use client";

import Image from "next/image";
import { FC } from "react";

/**
 * SectionBackdrop — a subtle, full-bleed thematic photo behind a section.
 * `dark` sections render the photo at higher opacity under a navy overlay
 * (cinematic, like the EANAT acts); light sections render a faint whisper
 * of texture so the content stays crisp. All source images are PD/CC0.
 */
export const SectionBackdrop: FC<{ image: string; dark?: boolean }> = ({ image, dark = false }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <Image
      src={image}
      alt=""
      fill
      className="object-cover"
      style={{ opacity: dark ? 0.22 : 0.06 }}
    />
    {dark && (
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(15,28,46,0.80) 0%, rgba(22,39,63,0.66) 100%)" }}
      />
    )}
  </div>
);

export default SectionBackdrop;

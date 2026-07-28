"use client";

/**
 * AppBetaSection — the iPhone beta invite, as a permanent band rather than the
 * timed BetaInvite popup it replaces.
 *
 * Placed after the demo: by then the reader has seen the product work, so
 * "put it in your pocket" is the natural next step, and it is well above the
 * closing CTA so the two asks do not stack.
 *
 * The QR is the desktop path — the TestFlight link is useless on the machine
 * reading the page, but the phone beside it can scan. On a phone the QR is
 * hidden and the button is a tap.
 */
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import { LINKS } from "@/lib/links";

const STEPS = [
  {
    title: "Install TestFlight",
    body: "Apple's beta app, free from the App Store. The invite link does nothing until it is installed.",
  },
  {
    title: "Open the link again",
    body: "Tap it a second time and Perspectivity is there, ready to install.",
  },
];

const AppBetaSection: FC = () => {
  return (
    <section id="ios-beta" className="relative bg-navy-deep overflow-hidden">
      {/* Night city with light trails — the reading-on-the-move motif, and its
          street glow sits with the amber accent. Its only other use is light at
          0.06 in FeaturesSection, so dark here does not read as a repeat, and it
          differs from the sections either side (press-room, then actor). */}
      <SectionBackdrop image="/assets/images/eanat/time.jpg" dark />

      {/* Amber wash — marks the band as an invitation, not another feature block. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 90% at 15% 0%, rgba(224,160,48,0.16) 0%, rgba(15,28,46,0) 62%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

      <div className="relative container mx-auto px-5 sm:px-6 max-w-[1060px] py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.25fr_auto] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-amber mb-5 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
                </span>
                Now in beta · iOS
              </p>
              <h2 className="font-serif text-white text-[34px] leading-[1.1] sm:text-[46px] sm:leading-[1.06] tracking-[-0.02em] mb-5">
                Perspectivity, <span className="italic text-amber">on your iPhone.</span>
              </h2>
              <p className="font-hanken text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-9">
                The same bias analysis and cross-outlet reads you get on the web, in
                your pocket. Open beta through TestFlight — free, and it takes about a
                minute.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Numbered because the order is the part people get wrong. */}
              <ol className="space-y-4 mb-9">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="grid place-items-center flex-shrink-0 w-7 h-7 rounded-full bg-amber/15 font-hanken text-[13px] font-bold text-amber">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-hanken text-[15px] font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="font-hanken text-[14px] text-white/60 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                <Link
                  href={LINKS.testflight}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-bright text-navy font-hanken font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Join the iOS beta</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
                <p className="font-hanken text-[13px] text-white/45">
                  iPhone only for now — Android is next.
                </p>
              </div>
            </Reveal>
          </div>

          {/* QR — desktop path. Hidden on phones, which tap the button instead. */}
          <Reveal delay={0.24} className="hidden sm:block">
            <div className="flex flex-col items-center gap-3">
              <Link
                href={LINKS.testflight}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join the Perspectivity iOS beta on TestFlight"
                className="rounded-2xl bg-white p-3 transition-transform duration-300 hover:scale-[1.03] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
              >
                <Image
                  src="/testflight-qr.svg"
                  alt="QR code linking to the Perspectivity TestFlight invite"
                  width={168}
                  height={168}
                  className="w-[150px] h-[150px] sm:w-[168px] sm:h-[168px]"
                />
              </Link>
              <span className="font-hanken text-[12px] text-white/50 text-center max-w-[170px] leading-snug">
                Scan with your iPhone camera
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AppBetaSection;

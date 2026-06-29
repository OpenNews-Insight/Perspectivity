import { FC } from "react";
import { Reveal } from "@/lib/motionfold";

const Market: FC = () => {
  const exits = [
    { name: "Recorded Future", value: "$2.65B", detail: "acquired by Mastercard" },
    { name: "Dataminr", value: "$4.1B", detail: "peak private valuation" },
  ];

  const funnels = [
    { label: "TAM", text: "Global narrative intelligence & counter-misinformation", em: "$30B+" },
    { label: "SAM", text: "Multilingual & Global South markets incumbents can't read", em: "" },
    { label: "SOM", text: "Bangladesh + diaspora beachhead, expanding to emerging democracies", em: "" },
  ];

  return (
    <section id="market" className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1080px] py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* left: headline + big number */}
          <Reveal>
            <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">
              The market
            </p>
            <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[46px] sm:leading-[1.06] tracking-[-0.02em] mb-6">
              A $30B market, opening fast.
            </h2>
            <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed mb-8">
              Enterprise spend on countering misinformation and narrative intelligence is projected to reach{" "}
              <span className="text-navy font-medium">$30B+ by 2028 (Gartner)</span>. The category has already produced
              multi-billion-dollar exits &mdash; the demand is proven.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {exits.map((e) => (
                <div key={e.name} className="rounded-2xl border border-line bg-surface-secondary p-4 sm:p-5">
                  <p className="font-serif text-navy text-[24px] sm:text-[28px] tracking-[-0.01em]">{e.value}</p>
                  <p className="font-hanken text-[13px] font-semibold text-navy mt-1">{e.name}</p>
                  <p className="font-hanken text-[12px] text-secondary-400">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* right: TAM/SAM/SOM stack */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-navy text-white p-7 sm:p-9">
              <p className="font-hanken text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6EE7B7] mb-6">
                How we take share
              </p>
              <div className="space-y-4">
                {funnels.map((f, i) => (
                  <div key={f.label} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[#6EE7B7]/60" style={{ background: i === 0 ? "#6EE7B7" : "transparent" }} />
                    {i < funnels.length - 1 && <span className="absolute left-[7px] top-7 bottom-[-20px] w-px bg-white/15" />}
                    <p className="font-hanken text-[11px] font-semibold tracking-[0.16em] uppercase text-white/50">{f.label}</p>
                    <p className="font-hanken text-[15px] text-white/90 leading-snug mt-0.5">
                      {f.text} {f.em && <span className="text-[#6EE7B7] font-semibold">{f.em}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Market;

"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Globe, Users, TrendingDown } from "lucide-react";
import Image from "next/image";

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200M+",
      label: "People affected by news bias in Bangladesh alone",
      color: "text-primary-600",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      number: "80%",
      label: "Of regional news lacks bias transparency",
      color: "text-primary-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Languages underserved by current solutions",
      color: "text-primary-700",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "64",
      label: "Districts in Bangladesh need local news insights",
      color: "text-primary-800",
    },
  ];

  return (
    // <section id="problem" className="py-20 bg-gray-50" ref={ref}>
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       {/* Content */}
    //       <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
    //         <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
    //           <AlertTriangle size={16} />
    //           <span className="font-medium">Critical Information Crisis</span>
    //         </div>

    //         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
    //           The Information Crisis in
    //           <span className="text-gradient"> Emerging Markets</span>
    //         </h2>

    //         <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
    //           <p>
    //             In Bangladesh and similar low-resource democracies, news is often fragmented and biased,
    //             especially at the district level and across local languages. This information gap affects
    //             citizens, global diaspora communities, NGOs, and companies interested in trends in emerging markets.
    //           </p>

    //           <p>
    //             During crises like elections, protests, or natural disasters, people see hundreds of headlines
    //             and posts but don't know what to trust. Traditional media lacks transparency about bias and
    //             narrative framing.
    //           </p>

    //           <p className="font-semibold text-gray-800">
    //             The result? Democratic discourse suffers, and critical civic signals are lost in the noise.
    //           </p>
    //         </div>

    //         <div className="mt-8">
    //           <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-2xl">
    //             <h3 className="text-xl font-bold mb-2">Real Impact</h3>
    //             <p className="text-primary-100">
    //               "When protests emerge at the local level, our agents flag those signals—helping NGOs
    //               and businesses respond early, and citizens understand the full context."
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Stats Grid */}
    //       <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //           {stats.map((stat, index) => (
    //             <div
    //               key={index}
    //               className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
    //                 isVisible ? 'animate-fade-in-up' : ''
    //               }`}
    //               style={{ animationDelay: `${index * 200}ms` }}
    //             >
    //               <div className={`${stat.color} mb-4`}>
    //                 {stat.icon}
    //               </div>
    //               <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
    //                 {stat.number}
    //               </div>
    //               <div className="text-gray-600 text-sm leading-relaxed">
    //                 {stat.label}
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         {/* Visual Element */}
    //         <div className="mt-8 relative">
    //           <div className="bg-white p-6 rounded-2xl shadow-lg">
    //             <div className="flex items-center space-x-4 mb-4">
    //               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    //               <span className="text-sm font-medium text-gray-700">Current Information Landscape</span>
    //             </div>
    //             <div className="space-y-3">
    //               <div className="flex items-center space-x-3">
    //                 <div className="w-2 h-2 bg-red-400 rounded-full"></div>
    //                 <span className="text-sm text-gray-600">Fragmented sources</span>
    //               </div>
    //               <div className="flex items-center space-x-3">
    //                 <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
    //                 <span className="text-sm text-gray-600">Hidden bias</span>
    //               </div>
    //               <div className="flex items-center space-x-3">
    //                 <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
    //                 <span className="text-sm text-gray-600">Language barriers</span>
    //               </div>
    //               <div className="flex items-center space-x-3">
    //                 <div className="w-2 h-2 bg-red-400 rounded-full"></div>
    //                 <span className="text-sm text-gray-600">Lost civic signals</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="problem"
      className="px-5 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-[80px] md:py-[120px] mx-auto"
    >
      <h2 className="text-paragraph-md-medium text-primary-500 mb-6 sm:mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10">
        <div className="flex flex-col justify-between bg-surface-secondary p-4 sm:p-6 md:p-10 lg:p-20 rounded-3xl aspect-square">
          <div>
            <h2 className="text-heading-3-semibold text-secondary-800 mb-4 sm:mb-6">
              The Information Crisis in Emerging Markets
            </h2>
            <p className="text-paragraph-sm-regular sm:text-paragraph-md-regular mb-4 sm:mb-6">
              In countries like Bangladesh, local news is often biased,
              fragmented, and lost in language barriers. Citizens, NGOs, and
              global audiences struggle to find trustworthy information -
              especially during crises like elections or disasters. Traditional
              media rarely reveals its bias, making it hard to know what's true.
            </p>
          </div>
          <div className="bg-primary-50 px-3 py-2 rounded-2xl max-w-full sm:max-w-[480px]">
            <div className="text-primary-800 text-paragraph-sm-medium mb-2">
              Real Impact
            </div>
            <div className="text-primary-600 text-paragraph-sm-regular">
              When protests emerge at the local level, our agents flag those
              signals — helping NGOs and businesses respond early, and citizens
              understand the full context.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-20 mx-auto w-full aspect-square">
          <div className="flex items-center gap-3 justify-end">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-700 text-paragraph-md-medium py-[10px] px-4 rounded-[9999px] w-full max-w-[245px] text-xs sm:text-sm md:text-base">
              64 Districts in Bangladesh Need Local News Insights
            </div>
            <div className="relative w-[60px] h-[60px] sm:w-[76px] sm:h-[76px]">
              <Image
                src="/assets/images/bd-map.png"
                alt="Bangladesh Map"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-start">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-800 text-heading-3-medium md:text-heading-1-medium py-1 md:py-2 px-4 rounded-[9999px]">
              80%
            </div>
            <div>
              <span className="text-paragraph-md-medium text-secondary-700">
                News lacks transparency
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 justify-between bg-primary-500 px-5 py-2 rounded-[9999px] text-primary-50 ">
            <div className=" text-heading-3-medium md:text-heading-1-medium">
              200 M
            </div>
            <div>
              <span className="text-paragraph-md-regular">People Affected</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-700 text-paragraph-md-medium py-[10px] px-4 rounded-[9999px] w-full max-w-[260px]">
              15+ Languages underserved by current solutions
            </div>
            <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[76px] bg-primary-500 rounded-[9999px] flex justify-center items-center">
              <Image
                src="/assets/icons/team-website-icon.svg"
                alt="World Map"
                width={48}
                height={48}
                className="object-contain rounded-lg w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

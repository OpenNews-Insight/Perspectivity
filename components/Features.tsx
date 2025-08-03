"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Scale,
  FileText,
  MessageCircle,
  BarChart3,
  Globe,
} from "lucide-react";

export default function Features() {
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

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "News Aggregation AI Agent",
      description:
        "Automatically gathers related stories from TV, newspapers, portals, and social media. You don't search for news — it finds you.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Multi-Axis Bias Analysis",
      description:
        "Detects bias across political, cultural, and religious axes—not just left vs right. Shows whether stories lean pro-government, opposition, secular, or religious.",
      gradient: "from-purple-500 to-pink-500",
      delay: "200ms",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI News Summarizer",
      description:
        "Condenses long articles into clear, factual summaries in both English and local languages. Get key facts in under 60 seconds without bias or fluff.",
      gradient: "from-green-500 to-emerald-500",
      delay: "400ms",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Interactive News Chat",
      description:
        'Perplexity-style conversational interface. Ask "What\'s happening with protests in Dhaka?" and get real-time answers grounded in verified news.',
      gradient: "from-orange-500 to-red-500",
      delay: "600ms",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Regional Trend Analytics",
      description:
        "Mapping of stories across districts, tracking bias, media attention, and sentiment over time. See how issues evolve geographically.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "800ms",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Local Language Support",
      description:
        "Built on BongLLaMA, the first open-source Bangla LLM fine-tuned for civic NLP. Works on low-end phones with offline capabilities.",
      gradient: "from-teal-500 to-blue-500",
      delay: "1000ms",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Bot size={16} />
            <span className="font-medium">Powered by AI</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A mash of
            <span className="text-gradient"> Ground News + Perplexity</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Six powerful AI agents working together to give you complete
            transparency into how news is framed, who's behind it, and what it
            really means for your community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: feature.delay }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See all features in action
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Watch how these AI agents work together to surface
              multi-perspective news insights in real-time for Bangladesh and
              beyond.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Watch Demo Below
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

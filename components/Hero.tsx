'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const slogans = [
    "Every Story. Every Side. In Your Language.",
    "Uncover Every Angle Behind the Headlines.",
    "See the Divide. Grasp the Debate.",
    "News with Nuance—Faith, Power, and Politics.",
    "Where Perspectives Collide, Insight Emerges."
  ]

  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slogans.length])

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Real‑time AI news bias agent
            <br />
            <span className="text-primary-200">for emerging markets</span>
          </h1>

          {/* Dynamic Tagline */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-100 font-medium animate-fade-in-up">
              "{slogans[currentSlogan]}"
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            In a world overwhelmed by biased narratives and language barriers, Perspectivity empowers citizens with multi-perspective news in their own language. Built for low-resource countries, we provide an open-source news insight framework that scrapes, aggregates, and analyzes regional news in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#demo"
              className="group gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Watch Demo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://drishtikon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Try Drishtikon Live
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">200M+</div>
              <div className="text-primary-200 text-sm lg:text-base">People in Bangladesh</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">64</div>
              <div className="text-primary-200 text-sm lg:text-base">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-200 text-sm lg:text-base">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Real-time</div>
              <div className="text-primary-200 text-sm lg:text-base">News Analysis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
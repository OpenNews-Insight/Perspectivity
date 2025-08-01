'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Restore Trust in News?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join us in building democratic resilience through transparent, multi-perspective journalism. 
              Let's make every story, every side visible in every language.
            </p>
          </div>

          {/* Main CTA */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Investors</div>
                  <div className="text-primary-100 text-sm">YC S25 application in progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">NGOs</div>
                  <div className="text-primary-100 text-sm">Early access partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Researchers</div>
                  <div className="text-primary-100 text-sm">Collaborate on civic NLP</div>
                </div>
              </div>

              <a
                href="mailto:hello@perspectivity.co"
                className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Mail size={24} />
                <span>hello@perspectivity.co</span>
                <ArrowRight size={24} />
              </a>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Try Live Demo */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3">Try Drishtikon Live</h4>
              <p className="text-primary-100 mb-4 text-sm">
                Experience our Bangladesh pilot with real news data and see multi-perspective analysis in action.
              </p>
              <a
                href="https://drishtikon.life"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white hover:text-primary-200 font-semibold transition-colors"
              >
                <span>Visit Drishtikon</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Open Source */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3">Open Source & Research</h4>
              <p className="text-primary-100 mb-4 text-sm">
                Explore BongLLaMA on Hugging Face, read our ArXiv papers, and contribute to democratic AI.
              </p>
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-white hover:text-primary-200 font-semibold transition-colors"
              >
                <Github size={16} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <blockquote className="text-2xl italic text-primary-100 max-w-4xl mx-auto">
              "In a world overwhelmed by biased narratives and language barriers, we restore trust, 
              promote transparency, and build democratic resilience—starting where the data gap is deepest."
            </blockquote>
            <cite className="text-white font-medium mt-6 block">— Perspectivity Mission Statement</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
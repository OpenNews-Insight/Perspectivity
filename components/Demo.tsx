'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
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

  const demoFeatures = [
    "Real-time district-level news mapping",
    "Multi-axis bias visualization", 
    "Interactive chat with news context",
    "Trend analytics across regions",
    "Local language summary feeds",
    "Civic signal detection"
  ]

  return (
    <section id="demo" className="py-20 bg-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-blue-500/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
            <Play size={16} />
            <span className="font-medium">Live Demo</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See Perspectivity in 
            <span className="text-gradient"> Action</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how Drishtikon, our Bangladesh pilot, surfaces multi-perspective news insights in real-time. 
            From bias detection to trend analytics, see every feature working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Video Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                {!isPlaying ? (
                  // Video Thumbnail
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 w-20 h-20 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <Play size={32} className="text-white ml-1" />
                    </button>
                    
                    {/* Fake Screenshot Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2">Drishtikon Demo</div>
                        <div className="text-primary-200">3 minutes • Click to play</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Actual Loom Embed
                  <div className="aspect-video">
                    <iframe
                      src="https://www.loom.com/embed/3f5e1e09fdda48aa8c10157ada5bee70?sid=bbc6376a-a513-410f-b6c4-90b2d1aca624"
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Video Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">3 min</div>
                  <div className="text-sm text-gray-400">Demo length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">6</div>
                  <div className="text-sm text-gray-400">Features shown</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">Live</div>
                  <div className="text-sm text-gray-400">Real data</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">What you'll see in the demo:</h3>
              
              <div className="space-y-4">
                {demoFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-primary-500/30">
                <h4 className="text-lg font-bold mb-3">Ready to try it yourself?</h4>
                <p className="text-gray-300 mb-4 text-sm">
                  Drishtikon is live with real Bangladesh news data. Experience the future of transparent journalism.
                </p>
                <a
                  href="https://drishtikon.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>Try Drishtikon Live</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="text-xl italic text-gray-300 max-w-4xl mx-auto">
            "If your community can read the news, they should be able to see through it."
          </blockquote>
          <cite className="text-primary-400 font-medium mt-4 block">— Perspectivity Mission</cite>
        </div>
      </div>
    </section>
  )
}
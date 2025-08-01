'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertTriangle, Globe, Users, TrendingDown } from 'lucide-react'

export default function Problem() {
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

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200M+",
      label: "People affected by news bias in Bangladesh alone",
      color: "text-red-500"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      number: "80%",
      label: "Of regional news lacks bias transparency",
      color: "text-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Languages underserved by current solutions",
      color: "text-blue-500"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "64",
      label: "Districts in Bangladesh need local news insights",
      color: "text-purple-500"
    }
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
              <AlertTriangle size={16} />
              <span className="font-medium">Critical Information Crisis</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Information Crisis in 
              <span className="text-gradient"> Emerging Markets</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                In Bangladesh and similar low-resource democracies, news is often fragmented and biased, 
                especially at the district level and across local languages. This information gap affects 
                citizens, global diaspora communities, NGOs, and companies interested in trends in emerging markets.
              </p>
              
              <p>
                During crises like elections, protests, or natural disasters, people see hundreds of headlines 
                and posts but don't know what to trust. Traditional media lacks transparency about bias and 
                narrative framing.
              </p>
              
              <p className="font-semibold text-gray-800">
                The result? Democratic discourse suffers, and critical civic signals are lost in the noise.
              </p>
            </div>

            <div className="mt-8">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Real Impact</h3>
                <p className="text-primary-100">
                  "When protests emerge at the local level, our agents flag those signals—helping NGOs 
                  and businesses respond early, and citizens understand the full context."
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="mt-8 relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Current Information Landscape</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Fragmented sources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Hidden bias</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Language barriers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Lost civic signals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
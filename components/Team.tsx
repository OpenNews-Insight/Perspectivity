'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, ExternalLink, Award, BookOpen } from 'lucide-react'

export default function Team() {
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

  const team = [
    {
      name: "Abdullah Khan Zehady",
      role: "Founder & CEO",
      description: "ML infrastructure builder and BongLLaMA engineer. Built the first open-source Bangla LLM fine-tuned for civic NLP, available on Hugging Face with ArXiv publication.",
      image: "/api/placeholder/400/400",
      achievements: [
        "First open-source Bangla LLM (BongLLaMA)",
        "ArXiv publication on civic NLP",
        "Hugging Face model with 10K+ downloads"
      ],
      links: {
        github: "#",
        linkedin: "#",
        website: "#"
      },
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Roy Dipta",
      role: "Co-Founder & CTO", 
      description: "LLM researcher focusing on bias detection and event processing pipelines. Specializes in multi-axis bias analysis for low-resource language contexts.",
      image: "/api/placeholder/400/400",
      achievements: [
        "Multi-axis bias detection framework",
        "Event processing pipeline architecture",
        "Low-resource language NLP specialist"
      ],
      links: {
        github: "#",
        linkedin: "#",
        website: "#"
      },
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const milestones = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Foundation",
      description: "Published BongLLaMA research on ArXiv, establishing the technical foundation for civic NLP in Bangla"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Open Source Impact",
      description: "Released first open-source Bangla LLM on Hugging Face with 10K+ downloads from researchers worldwide"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "Live Pilot",
      description: "Launched Drishtikon beta in Bangladesh, processing 200+ news sources across 4 districts"
    }
  ]

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Award size={16} />
            <span className="font-medium">Meet the Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building the future of 
            <span className="text-gradient"> transparent journalism</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team combines deep technical expertise in NLP and AI with a mission to restore trust 
            in news through transparency and multi-perspective analysis.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-primary-600 font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Achievements</h4>
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full`}></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={member.links.github}
                        className={`w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={member.links.linkedin}
                        className={`w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={member.links.website}
                        className={`w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">Our Journey So Far</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {milestone.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Next Milestones</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">Q1 2025</div>
                <div className="text-primary-100">Complete Bangladesh market fit, onboard first NGO clients</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Q2 2025</div>
                <div className="text-primary-100">Scale to other low-resource countries in South Asia</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Q3 2025</div>
                <div className="text-primary-100">Launch enterprise API for diaspora and business intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
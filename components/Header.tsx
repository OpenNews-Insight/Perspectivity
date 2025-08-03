'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Team', href: '#team' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect border-b border-gray-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm md:bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
              <Image
                src="/assets/logo.jpeg"
                alt="Perspectivity Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient">
              Perspectivity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://drishtikon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-secondary hover:opacity-90 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg pulse-glow flex items-center space-x-2"
            >
              <span>Try Drishtikon</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="#contact"
              className="gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://drishtikon.life"
                target="_blank"
                rel="noopener noreferrer"
                className="block gradient-secondary hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try Drishtikon Live
              </Link>
              <Link
                href="#contact"
                className="block gradient-primary hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
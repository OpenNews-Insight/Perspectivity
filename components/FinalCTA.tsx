'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Restore Trust in News?
        </h2>
        <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
          Join us in building democratic resilience through transparent, multi-perspective journalism.
        </p>
        <Link
          href="mailto:hello@perspectivity.co"
          className="group inline-flex items-center bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <span>Get in Touch</span>
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
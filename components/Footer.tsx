import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-primary-400 mb-4">Perspectivity</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Real‑time AI news bias agent for emerging markets. Empowering democratic resilience through transparent journalism.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://drishtikon.life" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Drishtikon (Bangladesh)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#team" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  BongLLaMA on Hugging Face
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  ArXiv Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Perspectivity. All rights reserved. Building democratic resilience through AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
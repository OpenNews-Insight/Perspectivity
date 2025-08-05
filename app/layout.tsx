import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Perspectivity - Real‑time AI news bias agent for emerging markets',
  description: 'Empowering citizens with multi-perspective news in their own language. Built for low-resource countries, Perspectivity is an open-source news insight framework that scrapes, aggregates, and analyzes regional news in real time.',
  keywords: [
    'news bias detection',
    'AI news analysis',
    'Bangladesh news',
    'emerging markets',
    'media transparency',
    'BongLLaMA',
    'news aggregation',
    'bias analysis',
    'democratic resilience',
    'multi-perspective journalism'
  ],
  authors: [
    { name: 'Abdullah Khan Zehady', url: 'https://perspectivity.co' },
    { name: 'Roy Dipta', url: 'https://perspectivity.co' }
  ],
  creator: 'Perspectivity Team',
  publisher: 'Perspectivity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perspectivity.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://perspectivity.co',
    siteName: 'Perspectivity',
    title: 'Perspectivity - Real‑time AI news bias agent for emerging markets',
    description: 'Empowering citizens with multi-perspective news in their own language. Built for low-resource countries, Perspectivity is an open-source news insight framework that scrapes, aggregates, and analyzes regional news in real time.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Perspectivity - Every Story. Every Side. In Your Language.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perspectivity - Real‑time AI news bias agent for emerging markets',
    description: 'Empowering citizens with multi-perspective news in their own language. Built for low-resource countries, Perspectivity is an open-source news insight framework.',
    images: ['/og-image.png'],
    creator: '@perspectivityai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DLK18KPVM1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DLK18KPVM1');
        `}
      </Script>

      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Newsreader, Hanken_Grotesk, Noto_Serif_Bengali } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteSchemas } from '@/lib/structured-data'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

// Institutional design system (deck + lens mockups)
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const notoBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Perspectivity | Narrative Intelligence Platform',
  description: 'Perspectivity maps how every outlet frames the same story — exposing media bias, ownership, and hidden narrative structure across languages. See the structure beneath the news.',
  keywords: [
    'Perspectivity',
    'narrative intelligence',
    'media bias',
    'media bias checker',
    'news framing',
    'compare news sources',
    'narrative analysis',
    'bias analysis',
    'media transparency',
    'multilingual news analysis',
    'Ground News alternative',
    'AllSides alternative',
  ],
  authors: [
    { name: 'Abdullah Khan Zehady', url: 'https://perspectivity.co' },
    { name: 'Roy Dipta', url: 'https://perspectivity.co' }
  ],
  creator: 'Perspectivity Team',
  publisher: 'Perspectivity',
  category: 'technology',
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
    title: 'Perspectivity | Narrative Intelligence Platform',
    description: 'See how every outlet frames the same story. Perspectivity maps media bias, ownership, and hidden narrative structure across languages.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perspectivity | Narrative Intelligence Platform',
    description: 'See how every outlet frames the same story. Perspectivity maps media bias, ownership, and hidden narrative structure.',
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
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {siteSchemas().map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${hanken.variable} ${notoBengali.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
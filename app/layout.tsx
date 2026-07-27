import type { Metadata } from 'next'
import { Inter, Newsreader, Hanken_Grotesk, Noto_Serif_Bengali } from 'next/font/google'
import Script from 'next/script'
import BetaInvite from '@/components/BetaInvite'
import './globals.css'

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
  title: 'Perspectivity - AI-Powered Media Bias & Narrative Analysis',
  description: 'See how every outlet frames the same story. Perspectivity uses AI to expose media bias, reveal narrative framing, and help you think for yourself.',
  keywords: [
    'media bias detection',
    'AI news analysis',
    'narrative analysis',
    'media transparency',
    'news framing',
    'news aggregation',
    'bias analysis',
    'media literacy',
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
    title: 'Perspectivity - AI-Powered Media Bias & Narrative Analysis',
    description: 'See how every outlet frames the same story. Perspectivity uses AI to expose media bias, reveal narrative framing, and help you think for yourself.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Perspectivity - See How Media Shapes What You Believe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perspectivity - AI-Powered Media Bias & Narrative Analysis',
    description: 'See how every outlet frames the same story. Perspectivity uses AI to expose media bias and reveal narrative framing.',
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

      {/* PostHog Analytics */}
      <Script id="posthog-init" strategy="afterInteractive">
        {`
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_ztFPmPbPnztEiw3SkAtn7un3wGGAdf3prEfd3yJkmUSQ', {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only'
          });
        `}
      </Script>

      <head>
        {/* Splash gate. Runs before the body paints, so a repeat load in the
            same session never flashes the cover: it stamps the root element and
            the CSS rule in globals.css hides the splash from the first frame.
            The first load of a session falls through and plays the intro. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('persp_splash_seen')){document.documentElement.setAttribute('data-splash-seen','1')}else{sessionStorage.setItem('persp_splash_seen','1')}}catch(e){}`,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${hanken.variable} ${notoBengali.variable} ${inter.className}`}
      >
        {children}
        <BetaInvite />
      </body>
    </html>
  )
}
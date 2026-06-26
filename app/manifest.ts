import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Perspectivity — Narrative Intelligence Platform',
    short_name: 'Perspectivity',
    description:
      'Perspectivity maps how every outlet frames the same story — exposing media bias, ownership, and hidden narrative structure across languages.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#16273F',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/assets/logo.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/assets/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    ],
  }
}

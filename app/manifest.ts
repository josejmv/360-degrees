// types
import type { MetadataRoute } from 'next'

/**
 * This function returns the manifest for the app
 */
const manifest = (): MetadataRoute.Manifest => ({
  name: '360-degrees',
  display: 'fullscreen',
  theme_color: '#000000',
  short_name: '360-degrees',
  background_color: '#000000',
  start_url: '/iniciar-sesion',
  description: '360-degrees is a web app to manage the employees of a company',
  icons: [
    { sizes: '192x192', type: 'image/png', src: '/logo/icon-192x192.png' },
    { sizes: '256x256', type: 'image/png', src: '/logo/icon-256x256.png' },
    { sizes: '384x384', type: 'image/png', src: '/logo/icon-384x384.png' },
    { sizes: '512x512', type: 'image/png', src: '/logo/icon-512x512.png' },
  ],
})

export default manifest

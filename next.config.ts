import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['mongoose'],
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY,
    SUBSCRIPTION_APP_ID: process.env.SUBSCRIPTION_APP_ID,
    SUBSCRIPTION_SECRET_KEY: process.env.SUBSCRIPTION_SECRET_KEY,
    NEXT_PUBLIC_VAPID_PUBLIC_KEY: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    NEXT_PUBLIC_SUBSCRIPTION_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_SUBSCRIPTION_PUBLIC_KEY,
  },
  redirects: async () => {
    return [{ source: '/', permanent: false, destination: '/iniciar-sesion' }]
  },
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
}

export default nextConfig

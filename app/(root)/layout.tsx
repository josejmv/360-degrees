// main tools
import localFont from 'next/font/local'

// components
import { SessionWrapper } from './session-wrapper'

// styles
import '@/globals.css'

// types
import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

const geistSans = localFont({
  weight: '100 900',
  variable: '--font-geist-sans',
  src: './fonts/GeistVF.woff',
})
const geistMono = localFont({
  weight: '100 900',
  variable: '--font-geist-mono',
  src: './fonts/GeistMonoVF.woff',
})

export const metadata: Metadata = {
  title: '360-degrees',
  icons: { icon: '/logo/icon-192x192.png' },
  description: '360-degrees is a web app to manage the employees of a company',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <SessionWrapper>
    <html lang='es'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  </SessionWrapper>
)

export default RootLayout

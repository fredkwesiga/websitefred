import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Fred Kwesiga | Software Developer & UI/UX Designer',
  description: 'Premium portfolio showcasing innovative web development and UI/UX design work by Fred Kwesiga, a Ugandan software engineer passionate about building user-focused digital experiences.',
  keywords: 'Software Developer, UI/UX Designer, Frontend Development, React, Next.js, Web Design, Uganda',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      // {
      //   url: '/icon.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    // apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground relative">
        {/* Animated gradient blobs */}
        <div className="gradient-blob" style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          width: '400px',
          height: '400px',
          top: '-10%',
          left: '-5%',
          animation: 'float 15s infinite ease-in-out',
        }} />
        <div className="gradient-blob" style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          width: '350px',
          height: '350px',
          bottom: '10%',
          right: '5%',
          animation: 'float 20s infinite ease-in-out 2s',
        }} />
        <div className="gradient-blob" style={{
          background: 'radial-gradient(circle, #f97316 0%, transparent 70%)',
          width: '300px',
          height: '300px',
          bottom: '20%',
          left: '50%',
          animation: 'float 18s infinite ease-in-out 1s',
        }} />
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -50px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
          }
        `}</style>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

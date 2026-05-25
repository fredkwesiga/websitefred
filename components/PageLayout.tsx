import { ReactNode } from 'react'
import { Navigation } from './Navigation'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="lg:ml-64 relative z-10">
        {children}
      </main>
    </div>
  )
}

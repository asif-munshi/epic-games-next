import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import SubHeader from '@/components/Layout/SubHeader'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Epic Games',
  description: 'Created by Asif Munshi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <main className="flex min-h-screen flex-col items-center">
            <Header />
            <SubHeader />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}

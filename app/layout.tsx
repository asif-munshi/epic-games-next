import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

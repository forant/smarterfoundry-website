import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Background } from '@/components/landing/background'
import { Header } from '@/components/landing/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Smarter Foundry — AI-enabled consumer apps',
  description:
    'Smarter Foundry LLC builds and operates niche AI-enabled mobile apps that help people make better everyday decisions around food, fitness, and sport.',
  metadataBase: new URL('https://smarterfoundry.ai'),
  openGraph: {
    title: 'Smarter Foundry',
    description:
      'An independent software company building AI-enabled consumer apps for focused, everyday decisions.',
    url: 'https://smarterfoundry.ai',
    siteName: 'Smarter Foundry',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Background />
        <Header />
        {children}
      </body>
    </html>
  )
}

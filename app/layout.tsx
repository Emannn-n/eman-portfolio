import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Eman Iftikhar | Computer Science Student',
  description: 'Portfolio of Eman Iftikhar - A passionate Computer Science student focused on software engineering, programming, AI, and modern technology solutions.',
  keywords: ['Computer Science', 'Software Engineering', 'Portfolio', 'Developer', 'Student'],
  authors: [{ name: 'Eman Iftikhar' }],
  openGraph: {
    title: 'Eman Iftikhar | Computer Science Student',
    description: 'Portfolio of Eman Iftikhar - A passionate Computer Science student focused on software engineering, programming, AI, and modern technology solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

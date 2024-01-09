import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'z1pp1k',
    template: '%s | z1pp1k',
  },
  description: 'Developer, designer and social media enthusiast.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-white dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900">
        {children}
      </body>
    </html>
  )
}

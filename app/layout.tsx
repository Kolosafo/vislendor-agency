import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vislendor',
  description: ' Empower Your Online Presence and Drive More Customers to Your Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

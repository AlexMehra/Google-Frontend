import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Google',
    template: '%s - Google',
  },
  description: 'Search the world\'s information, including webpages, images, videos and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


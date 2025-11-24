import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Murphy's Pub | Cork",
  description: 'Traditional Irish pub in Cork. Family-owned since 1952.',
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

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Murphy's Pub | Traditional Irish Hospitality in Cork",
  description: 'Family-owned since 1952. Hearty food, live music, and a proper pint — all in the heart of Cork. Pull up a stool. You\'re among friends.',
  keywords: 'Cork pub, Irish pub, traditional music Cork, Sunday roast Cork, Guinness Cork, live music Cork, family pub, Murphy\'s Pub',
  authors: [{ name: 'Murphy\'s Pub' }],
  openGraph: {
    title: "Murphy's Pub | Traditional Irish Hospitality in Cork",
    description: 'Family-owned since 1952. Hearty food, live music, and a proper pint.',
    type: 'website',
    locale: 'en_IE',
    siteName: "Murphy's Pub"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // LocalBusiness Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "Murphy's Pub",
    "image": "https://murphyspub.ie/images/hero-pub-night.jpg",
    "description": "Family-owned traditional Irish pub in Cork since 1952. Hearty food, live music, and proper pints.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Main Street",
      "addressLocality": "Cork",
      "addressRegion": "Cork",
      "postalCode": "T12 X456",
      "addressCountry": "IE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.8969,
      "longitude": -8.4863
    },
    "telephone": "+353214271234",
    "email": "hello@murphyspub.ie",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
        "opens": "12:00",
        "closes": "23:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "12:00",
        "closes": "23:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "12:00",
        "closes": "01:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:30",
        "closes": "23:00"
      }
    ],
    "priceRange": "€€",
    "servesCuisine": "Irish",
    "acceptsReservations": "True",
    "menu": "https://murphyspub.ie/menu",
    "foundingDate": "1952"
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

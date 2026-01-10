import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DemoAdminButton from '@/components/DemoAdminButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://murphys-pub-demo.pages.dev'),
  title: {
    default: "Murphy's Pub | Traditional Irish Hospitality in Cork",
    template: "%s | Murphy's Pub",
  },
  description: 'Family-owned since 1952. Hearty food, live music, and a proper pint — all in the heart of Cork. Pull up a stool. You\'re among friends.',
  keywords: ['Cork pub', 'Irish pub', 'traditional music Cork', 'Sunday roast Cork', 'Guinness Cork', 'live music Cork', 'family pub'],
  authors: [{ name: "Murphy's Pub" }],
  openGraph: {
    title: "Murphy's Pub | Traditional Irish Hospitality",
    description: 'Family-owned since 1952. Hearty food, live music, and a proper pint.',
    type: 'website',
    locale: 'en_IE',
    siteName: "Murphy's Pub",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Murphy's Pub | Cork",
    description: 'Family-owned since 1952. Hearty food, live music, and a proper pint.',
  },
}

// LocalBusiness Schema for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: "Murphy's Pub",
  image: 'https://murphys-pub-demo.pages.dev/images/hero-pub-night.webp',
  description: 'Family-owned traditional Irish pub in Cork since 1952. Hearty food, live music, and proper pints.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Main Street',
    addressLocality: 'Cork',
    addressRegion: 'Cork',
    postalCode: 'T12 X456',
    addressCountry: 'IE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.8969,
    longitude: -8.4863,
  },
  telephone: '+353214271234',
  email: 'hello@murphyspub.ie',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '12:00',
      closes: '23:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '12:00',
      closes: '01:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:30',
      closes: '23:00',
    },
  ],
  priceRange: '€€',
  servesCuisine: 'Irish',
  acceptsReservations: 'True',
  menu: 'https://murphys-pub-demo.pages.dev/menu',
  foundingDate: '1952',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-wood-950 text-paper-100">
        <Header />
        <main>{children}</main>
        <Footer />
        <DemoAdminButton />
      </body>
    </html>
  )
}

import Hero from '@/components/Hero'
import PubAtmosphere from '@/components/PubAtmosphere'
import AboutSection from '@/components/AboutSection'
import OpeningHours from '@/components/OpeningHours'
import businessInfo from './data/business-info.json'
import openingHours from './data/opening-hours.json'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        headline={businessInfo.heroHeadline}
        tagline={businessInfo.heroTagline}
        backgroundImage="/images/hero-pub-night.webp"
        ctaButtons={[
          { text: 'View Menu', href: '/menu', variant: 'primary' },
          { text: 'Reserve a Table', href: '/contact', variant: 'secondary' }
        ]}
      />

      {/* Atmosphere Gallery - Step Inside the Pub */}
      <PubAtmosphere />

      {/* Welcome / About Section */}
      <AboutSection
        story={businessInfo.story}
        heritage={businessInfo.heritage}
        image="/images/heritage-photo.webp"
      />

      {/* Opening Hours */}
      <OpeningHours
        hours={openingHours.regular}
        notes={openingHours.notes}
        contactNote={openingHours.contactNote}
      />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-wood-900 via-wood-950 to-wood-900 relative overflow-hidden">
        {/* Warm glow */}
        <div className="absolute inset-0 bg-warm-glow opacity-50" />

        <div className="section-container relative text-center">
          <h2 className="section-heading mb-6">
            Ready for a Proper Pint?
          </h2>
          <p className="text-xl text-paper-200 mb-10 max-w-2xl mx-auto">
            Come experience three generations of Irish hospitality.
            Good craic, great pints, and a warm welcome await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Visit Us Today
            </Link>
            <Link
              href="/events"
              className="btn-ghost"
            >
              See What's On
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

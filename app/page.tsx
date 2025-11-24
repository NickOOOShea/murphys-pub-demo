import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import OpeningHours from '@/components/OpeningHours'
import businessInfo from './data/business-info.json'
import openingHours from './data/opening-hours.json'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        headline={businessInfo.heroHeadline}
        tagline={businessInfo.heroTagline}
        backgroundImage="/images/hero-pub-night.jpg"
        ctaButtons={[
          { text: 'View Menu', href: '/menu', variant: 'primary' },
          { text: 'Reserve a Table', href: '/contact', variant: 'secondary' }
        ]}
      />

      {/* Welcome / About Section */}
      <AboutSection
        story={businessInfo.story}
        heritage={businessInfo.heritage}
        image="/images/heritage-photo.jpg"
      />

      {/* Opening Hours */}
      <OpeningHours
        hours={openingHours.regular}
        notes={openingHours.notes}
        contactNote={openingHours.contactNote}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pub-800 to-pub-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready for a Proper Pint?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Come experience three generations of Irish hospitality
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-pub-900 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl"
          >
            Visit Us Today
          </a>
        </div>
      </section>
    </main>
  )
}

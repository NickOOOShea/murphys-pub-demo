import Link from 'next/link'
import openingHours from './data/opening-hours.json'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-dark text-cream px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="text-lg">Murphy's Pub</span>
          <a href="tel:+353214271234" className="text-gold hover:underline">
            021 427 1234
          </a>
        </div>
      </header>

      {/* Hero - Simple, clean */}
      <section className="bg-brown text-cream py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4">Est. 1952</p>
          <h1 className="text-5xl md:text-6xl mb-6">Murphy's Pub</h1>
          <p className="text-xl text-cream/80 mb-8">
            A proper pub in the heart of Cork. Three generations of Murphys,
            one perfect pint.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#hours"
              className="bg-gold text-dark px-6 py-3 hover:bg-gold/90 transition-colors"
            >
              Opening Hours
            </a>
            <a
              href="#contact"
              className="border border-cream/30 px-6 py-3 hover:bg-cream/10 transition-colors"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* About - Keep it brief */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl mb-6">Our Story</h2>
          <p className="text-lg text-dark/80 mb-4">
            What started as Seán Murphy's dream in 1952 has become a Cork institution.
            We're still family-owned, still pouring the same stout, and still welcoming
            everyone who walks through our door.
          </p>
          <p className="text-dark/60">
            Come for a pint. Stay for the craic.
          </p>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="bg-dark text-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Opening Hours</h2>
          <div className="space-y-3">
            {Object.entries(openingHours.regular).map(([day, hours]: [string, any]) => (
              <div key={day} className="flex justify-between border-b border-cream/10 pb-3">
                <span className="capitalize">{day}</span>
                <span className="text-cream/70">
                  {hours.closed ? 'Closed' : `${hours.open} – ${hours.close}`}
                </span>
              </div>
            ))}
          </div>
          {openingHours.notes && openingHours.notes.length > 0 && (
            <p className="mt-6 text-sm text-cream/60 text-center">
              {openingHours.notes[0]}
            </p>
          )}
        </div>
      </section>

      {/* Food & Drink - Simple list */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl mb-8">What We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-gold">Drink</h3>
              <ul className="space-y-2 text-dark/70">
                <li>Guinness, Murphy's, Beamish</li>
                <li>Local craft beers</li>
                <li>Irish whiskeys</li>
                <li>Wine, spirits, soft drinks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-gold">Food</h3>
              <ul className="space-y-2 text-dark/70">
                <li>Traditional Irish stew</li>
                <li>Fish & chips</li>
                <li>Toasted sandwiches</li>
                <li>Sunday roast (12-6pm)</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-dark/50">Food served 12pm - 9pm daily</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-brown text-cream py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl mb-8">Find Us</h2>
          <div className="space-y-4">
            <p className="text-xl">12 Main Street, Cork City</p>
            <p>
              <a href="tel:+353214271234" className="text-gold hover:underline">
                021 427 1234
              </a>
            </p>
            <p>
              <a href="mailto:hello@murphyspub.ie" className="text-cream/70 hover:text-cream">
                hello@murphyspub.ie
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-cream/50 py-8 px-6 text-center text-sm">
        <p>Murphy's Pub, Cork. Family-owned since 1952.</p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy" className="hover:text-cream">Privacy</Link>
          <Link href="/terms" className="hover:text-cream">Terms</Link>
        </div>
      </footer>
    </div>
  )
}

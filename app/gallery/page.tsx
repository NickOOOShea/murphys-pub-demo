import Gallery from '@/components/Gallery'

export const metadata = {
  title: "Gallery | Murphy's Pub",
  description: 'Photos from Murphy\'s Pub - cozy interiors, hearty food, live music nights, and happy faces. See what makes us Cork\'s favorite local.',
}

// Sample gallery images with story captions
const galleryImages = [
  {
    src: '/images/gallery/interior-1.webp',
    alt: 'Cozy pub interior with wooden bar',
    caption: 'The same bar where six generations of Murphys have pulled pints'
  },
  {
    src: '/images/gallery/food-1.webp',
    alt: 'Fish and chips with mushy peas',
    caption: 'Tom\'s famous beer-battered haddock - the recipe hasn\'t changed since 1852'
  },
  {
    src: '/images/gallery/music-1.webp',
    alt: 'Traditional music session',
    caption: 'Friday night sessions - these lads have been playing here for 20 years'
  },
  {
    src: '/images/gallery/pint-1.webp',
    alt: 'Perfect pint of Guinness',
    caption: 'A proper pour - we take our time, 119.5 seconds every time'
  },
  {
    src: '/images/gallery/crowd-1.webp',
    alt: 'Busy pub night',
    caption: 'Match night madness - Cork vs Kerry, August 2024'
  },
  {
    src: '/images/gallery/exterior-1.webp',
    alt: 'Murphy\'s Pub exterior at night',
    caption: 'The glow that\'s welcomed Cork locals for over 170 years'
  },
  {
    src: '/images/gallery/food-2.webp',
    alt: 'Guinness beef stew',
    caption: 'Slow-cooked for 4 hours - Gran Murphy\'s original recipe'
  },
  {
    src: '/images/gallery/staff-1.webp',
    alt: 'Bar staff smiling',
    caption: 'The crew - between us, we\'ve got 80 years behind this bar'
  },
  {
    src: '/images/gallery/quiz-1.webp',
    alt: 'Quiz night participants',
    caption: 'Wednesday quiz - they take it seriously here!'
  },
]

export default function GalleryPage() {
  return (
    <main className="bg-wood-950">
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-wood-950 overflow-hidden">
        {/* Warm glow background */}
        <div className="absolute inset-0 bg-warm-glow" />
        
        <div className="relative section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cream-300 mb-4 text-shadow-glow">
            Gallery
          </h1>
          <p className="text-xl text-paper-200">
            A glimpse inside Murphy's
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-wood-950">
        <div className="section-container">
          <p className="text-center text-paper-200 mb-12 max-w-2xl mx-auto text-lg">
            Hover over photos to see the stories behind them
          </p>

          <Gallery images={galleryImages} columns={3} />

          {/* Note about images */}
          <p className="text-center text-sm text-paper-300 mt-12 italic">
            Want to see your photo here? Tag us @murphyspubcork on Instagram
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wood-900 text-center border-t border-wood-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-cream-300 mb-4">
            Come Make Your Own Memories
          </h2>
          <p className="text-xl text-paper-200 mb-8">
            We'll save you a seat
          </p>
          <a
            href="/contact"
            className="btn-primary text-lg"
          >
            Visit Us
          </a>
        </div>
      </section>
    </main>
  )
}
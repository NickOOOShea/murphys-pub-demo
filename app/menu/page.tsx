import MenuSection from '@/components/MenuSection'
import menu from '../data/menu.json'

export const metadata = {
  title: "Menu | Murphy's Pub",
  description: 'Hearty food and proper pints. Traditional Irish dishes from €6.50. Fish & chips, Guinness beef stew, Sunday roasts, and more.',
}

export default function MenuPage() {
  return (
    <main className="bg-wood-950">
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-wood-950 overflow-hidden">
        {/* Warm glow background */}
        <div className="absolute inset-0 bg-warm-glow" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B5651D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cream-300 mb-4 text-shadow-glow">
            Our Menu
          </h1>
          <p className="text-xl text-paper-200">
            Hearty food and proper pints
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection
        foodMenu={menu.food}
        drinksMenu={menu.drinks}
        allergenNotice={menu.allergenNotice}
      />

      {/* CTA Section */}
      <section className="py-16 bg-wood-900 text-center border-t border-wood-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-cream-300 mb-4">
            Fancy Something?
          </h2>
          <p className="text-xl text-paper-200 mb-8">
            Call ahead to reserve your table
          </p>
          <a
            href="tel:+353214271234"
            className="btn-primary text-lg"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  )
}

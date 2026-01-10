import EventCard from '@/components/EventCard'
import events from '../data/events.json'

export const metadata = {
  title: "Events | Murphy's Pub",
  description: 'Live trad music every Friday, quiz night Wednesdays, Sunday roasts, and GAA match screenings. Check what\'s on at Murphy\'s Pub Cork.',
}

export default function EventsPage() {
  return (
    <main className="bg-wood-950">
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-wood-950 overflow-hidden">
        {/* Warm glow background */}
        <div className="absolute inset-0 bg-warm-glow" />
        
        <div className="relative section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cream-300 mb-4 text-shadow-glow">
            What's On
          </h1>
          <p className="text-xl text-paper-200">
            Live music, quiz nights, and more
          </p>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 bg-wood-950">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Weekly Events
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.recurring.map((event, index) => (
              <EventCard
                key={index}
                name={event.name}
                day={event.day}
                time={event.time}
                description={event.description}
                image={event.image}
                price={event.price}
                prize={event.prize}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider max-w-4xl mx-auto" />

      {/* Upcoming Events */}
      <section className="py-20 bg-wood-950">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Coming Up
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {events.upcoming.map((event, index) => (
              <div
                key={index}
                className="card p-6 border-l-4 border-l-whiskey-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cream-300 mb-2">{event.name}</h3>
                    <p className="text-paper-200">{event.description}</p>
                  </div>
                  <div className="text-right md:text-left md:min-w-[150px]">
                    <div className="text-lg font-bold text-whiskey-400">{event.date}</div>
                    {event.time && <div className="text-paper-200">{event.time}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Notice */}
      <section className="py-16 bg-wood-900 border-t border-wood-800">
        <div className="section-container text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-cream-300 mb-4">Sports Screenings</h2>
          <p className="text-xl text-paper-200 leading-relaxed">
            {events.sports.message}
          </p>
        </div>
      </section>
    </main>
  )
}

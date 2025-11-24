import EventCard from '@/components/EventCard'
import events from '../data/events.json'

export const metadata = {
  title: "Events | Murphy's Pub",
  description: 'Live trad music every Friday, quiz night Wednesdays, Sunday roasts, and GAA match screenings. Check what\'s on at Murphy\'s Pub Cork.',
}

export default function EventsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">What's On</h1>
          <p className="text-xl text-amber-100">
            Live music, quiz nights, and more
          </p>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pub-900 mb-12">
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

      {/* Upcoming Events */}
      <section className="py-20 bg-pub-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pub-900 mb-12">
            Coming Up
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {events.upcoming.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pub-900 mb-2">{event.name}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  <div className="text-right md:text-left md:min-w-[150px]">
                    <div className="text-lg font-bold text-amber-600">{event.date}</div>
                    {event.time && <div className="text-gray-600">{event.time}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Notice */}
      <section className="py-16 bg-gradient-to-r from-pub-700 to-pub-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Sports Screenings</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            {events.sports.message}
          </p>
        </div>
      </section>
    </main>
  )
}

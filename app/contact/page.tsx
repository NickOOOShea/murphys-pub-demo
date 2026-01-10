import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin } from 'lucide-react'
import businessInfo from '../data/business-info.json'
import openingHours from '../data/opening-hours.json'

export const metadata = {
  title: "Contact | Murphy's Pub",
  description: 'Get in touch with Murphy\'s Pub Cork. Book a table, ask a question, or just say hello. Call +353 21 427 1234 or visit us at 12 Main Street.',
}

export default function ContactPage() {
  return (
    <main className="bg-wood-950">
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-wood-950 overflow-hidden">
        {/* Warm glow background */}
        <div className="absolute inset-0 bg-warm-glow" />
        
        <div className="relative section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cream-300 mb-4 text-shadow-glow">
            Get in Touch
          </h1>
          <p className="text-xl text-paper-200">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-wood-950">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="card card-hover p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-whiskey-600/20 rounded-full mb-4 group-hover:bg-whiskey-600/30 transition">
                <Phone size={28} className="text-whiskey-400" />
              </div>
              <h3 className="text-xl font-bold text-cream-300 mb-2">Call Us</h3>
              <p className="text-paper-200 mb-2">Give us a ring</p>
              <p className="text-lg font-semibold text-whiskey-400">{businessInfo.contact.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${businessInfo.contact.email}`}
              className="card card-hover p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wood-800 rounded-full mb-4 group-hover:bg-wood-700 transition">
                <Mail size={28} className="text-cream-300" />
              </div>
              <h3 className="text-xl font-bold text-cream-300 mb-2">Email Us</h3>
              <p className="text-paper-200 mb-2">Drop us a line</p>
              <p className="text-lg font-semibold text-paper-100">{businessInfo.contact.email}</p>
            </a>

            {/* Location */}
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-900/30 rounded-full mb-4">
                <MapPin size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-cream-300 mb-2">Visit Us</h3>
              <p className="text-paper-200 mb-2">Find us here</p>
              <p className="text-lg font-semibold text-paper-100">
                {businessInfo.address.street}<br />
                {businessInfo.address.city}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-wood-900 rounded-xl overflow-hidden shadow-lifted border border-wood-800 mb-16">
            <iframe
              src={businessInfo.location.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Murphy's Pub location"
            />
          </div>

          {/* Form and Hours Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactForm />

            {/* Opening Hours */}
            <div>
              <h3 className="text-2xl font-bold text-cream-300 mb-6">When to Visit</h3>
              <div className="card p-6">
                <div className="space-y-3">
                  {Object.entries(openingHours.regular).map(([day, times]) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-wood-700 last:border-0">
                      <span className="font-semibold capitalize text-cream-300">{day}</span>
                      <span className="text-paper-200">{times.open} - {times.close}</span>
                    </div>
                  ))}
                </div>

                {openingHours.contactNote && (
                  <div className="mt-6 pt-6 border-t border-wood-700">
                    <p className="text-sm text-paper-300 italic text-center">
                      "{openingHours.contactNote}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

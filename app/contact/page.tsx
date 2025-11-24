import ContactForm from '@/components/ContactForm'
import OpeningHours from '@/components/OpeningHours'
import { Phone, Mail, MapPin } from 'lucide-react'
import businessInfo from '../data/business-info.json'
import openingHours from '../data/opening-hours.json'

export const metadata = {
  title: "Contact | Murphy's Pub",
  description: 'Get in touch with Murphy\'s Pub Cork. Book a table, ask a question, or just say hello. Call +353 21 427 1234 or visit us at 12 Main Street.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-700 text-white">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-100">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition">
                <Phone size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-pub-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Give us a ring</p>
              <p className="text-lg font-semibold text-amber-600">{businessInfo.contact.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${businessInfo.contact.email}`}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="inline-block p-4 bg-pub-100 rounded-full mb-4 group-hover:bg-pub-200 transition">
                <Mail size={32} className="text-pub-600" />
              </div>
              <h3 className="text-xl font-bold text-pub-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Drop us a line</p>
              <p className="text-lg font-semibold text-pub-600">{businessInfo.contact.email}</p>
            </a>

            {/* Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <MapPin size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-pub-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Find us here</p>
              <p className="text-lg font-semibold text-gray-700">
                {businessInfo.address.street}<br />
                {businessInfo.address.city}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-16">
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
              <h3 className="text-2xl font-bold text-pub-900 mb-6">When to Visit</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-3">
                  {Object.entries(openingHours.regular).map(([day, times]) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-semibold capitalize text-pub-800">{day}</span>
                      <span className="text-gray-600">{times.open} - {times.close}</span>
                    </div>
                  ))}
                </div>

                {openingHours.contactNote && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic text-center">
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

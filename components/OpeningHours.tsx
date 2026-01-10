'use client'

import { motion } from 'framer-motion'
import { Utensils, Beer } from 'lucide-react'
import { useEffect, useState } from 'react'

interface WeeklyHours {
  [key: string]: {
    open: string
    close: string
    kitchen: string
  }
}

interface OpeningHoursProps {
  hours: WeeklyHours
  notes?: string[]
  contactNote?: string
}

export default function OpeningHours({ hours, notes, contactNote }: OpeningHoursProps) {
  const [currentDay, setCurrentDay] = useState<string>('')
  const [isOpenNow, setIsOpenNow] = useState(false)

  useEffect(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const today = days[new Date().getDay()]
    setCurrentDay(today)

    const now = new Date()
    const currentTime = now.getHours() * 100 + now.getMinutes()
    const dayHours = hours[today]
    if (dayHours) {
      const [openH, openM] = dayHours.open.split(':').map(Number)
      const [closeH, closeM] = dayHours.close.split(':').map(Number)
      const openTime = openH * 100 + openM
      let closeTime = closeH * 100 + closeM
      if (closeTime < openTime) closeTime += 2400
      setIsOpenNow(currentTime >= openTime && currentTime <= closeTime)
    }
  }, [hours])

  return (
    <section className="py-24 bg-wood-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-heading text-center mb-4">
            Opening Hours
          </h2>
          <p className="section-subheading text-center mb-12">
            Pull up a stool. We'll pour you a proper pint.
          </p>

          {/* Open Now Badge */}
          {isOpenNow && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                We're Open Now
              </span>
            </motion.div>
          )}

          {/* Hours Card */}
          <div className="bg-wood-900 rounded-2xl border border-wood-800 overflow-hidden shadow-lifted">
            <div className="divide-y divide-wood-800">
              {Object.entries(hours).map(([day, times], index) => {
                const isToday = day.toLowerCase() === currentDay

                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`p-5 transition-all ${
                      isToday
                        ? 'bg-whiskey-600/10 border-l-4 border-whiskey-500'
                        : 'hover:bg-wood-800/50'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                      {/* Day */}
                      <div className={`font-semibold capitalize ${isToday ? 'text-whiskey-400' : 'text-cream-300'}`}>
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs text-green-500 font-normal">Today</span>
                        )}
                      </div>

                      {/* Bar Hours */}
                      <div className="flex items-center gap-2 text-paper-200">
                        <Beer className="w-4 h-4 text-whiskey-500" />
                        <span className="text-sm">
                          {times.open} - {times.close}
                        </span>
                      </div>

                      {/* Kitchen Hours */}
                      <div className="flex items-center gap-2 text-paper-300/70">
                        <Utensils className="w-4 h-4 text-wood-500" />
                        <span className="text-sm">
                          Kitchen: {times.kitchen}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Notes */}
            {notes && notes.length > 0 && (
              <div className="bg-wood-800/50 p-5 border-t border-wood-800">
                <ul className="space-y-2 text-sm text-paper-300">
                  {notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-whiskey-500 mr-2">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Note */}
            {contactNote && (
              <div className="bg-wood-950 p-5 text-center border-t border-wood-800">
                <p className="text-paper-200/80 italic">"{contactNote}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

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

  useEffect(() =>
    {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const today = days[new Date().getDay()]
    setCurrentDay(today)

    // Check if currently open (simplified - just checks if within hours)
    const now = new Date()
    const currentTime = now.getHours() * 100 + now.getMinutes()
    const dayHours = hours[today]
    if (dayHours) {
      const [openH, openM] = dayHours.open.split(':').map(Number)
      const [closeH, closeM] = dayHours.close.split(':').map(Number)
      const openTime = openH * 100 + openM
      let closeTime = closeH * 100 + closeM
      // Handle closing after midnight
      if (closeTime < openTime) closeTime += 2400

      setIsOpenNow(currentTime >= openTime && currentTime <= closeTime)
    }
  }, [hours])

  return (
    <section className="py-16 bg-pub-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-pub-900">
            Opening Hours
          </h2>

          {isOpenNow && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg"
            >
              🍺 We're Open Now!
            </motion.div>
          )}

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {Object.entries(hours).map(([day, times], index) => {
                const isToday = day.toLowerCase() === currentDay

                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`
                      p-5 transition-all
                      ${isToday ? 'bg-amber-50 border-l-4 border-amber-500' : 'hover:bg-gray-50'}
                    `}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                      {/* Day */}
                      <div className={`font-semibold capitalize ${isToday ? 'text-amber-700' : 'text-pub-800'}`}>
                        {day}
                        {isToday && <span className="ml-2 text-xs text-green-600">● Now</span>}
                      </div>

                      {/* Bar Hours */}
                      <div className="flex items-center gap-2 text-gray-700">
                        <Beer size={18} className="text-amber-600" />
                        <span className="text-sm">
                          {times.open} - {times.close}
                        </span>
                      </div>

                      {/* Kitchen Hours */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Utensils size={18} className="text-pub-600" />
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
              <div className="bg-gray-50 p-5 border-t border-gray-200">
                <ul className="space-y-2 text-sm text-gray-600">
                  {notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Note */}
            {contactNote && (
              <div className="bg-pub-800 text-white p-5 text-center">
                <p className="text-sm italic">"{contactNote}"</p>
              </div>
            )}

            {/* "See you tonight!" if currently open */}
            {isOpenNow && (
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 text-center font-semibold">
                See you tonight! 🍻
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

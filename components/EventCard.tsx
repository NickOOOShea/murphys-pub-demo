'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Trophy } from 'lucide-react'
import Image from 'next/image'

interface EventCardProps {
  name: string
  day: string
  time: string
  description: string
  image?: string
  price?: string
  prize?: string
}

export default function EventCard({ name, day, time, description, image, price, prize }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateZ: 0.5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Textured Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236d8439' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Subtle flicker animation on music images */}
          {name.toLowerCase().includes('music') && (
            <motion.div
              animate={{ opacity: [1, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-amber-400/10"
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-2xl font-bold text-pub-900 mb-3">{name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-pub-700">
            <Calendar size={18} />
            <span className="font-semibold">{day}</span>
          </div>
          <div className="flex items-center gap-2 text-pub-700">
            <Clock size={18} />
            <span>{time}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Price or Prize */}
        {price && (
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-semibold">
            {price}
          </div>
        )}

        {prize && (
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
            <Trophy size={18} />
            <span>{prize}</span>
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400/30 group-hover:border-amber-500/50 transition-colors" />
    </motion.div>
  )
}

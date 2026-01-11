'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Flame, Music, Clock, Users } from 'lucide-react'

const atmosphereImages = [
  {
    src: '/images/atmosphere/fireplace-1.jpg',
    alt: 'Warm fireplace corner',
    caption: 'Warm by the fire',
    size: 'large',
  },
  {
    src: '/images/atmosphere/snug-1.jpg',
    alt: 'Traditional Irish pub snug',
    caption: 'The snug awaits',
    size: 'tall',
  },
  {
    src: '/images/atmosphere/whiskey-shelf-1.jpg',
    alt: 'Selection of fine Irish whiskeys',
    caption: 'Ireland\'s finest',
    size: 'medium',
  },
  {
    src: '/images/atmosphere/trad-session-1.jpg',
    alt: 'Traditional Irish music session',
    caption: 'Live trad sessions',
    size: 'wide',
  },
  {
    src: '/images/atmosphere/wooden-bar-1.jpg',
    alt: 'Aged wooden bar counter',
    caption: 'At the bar since \'52',
    size: 'medium',
  },
  {
    src: '/images/atmosphere/cozy-corner-1.jpg',
    alt: 'Cozy corner seating',
    caption: 'Your usual spot',
    size: 'medium',
  },
  {
    src: '/images/atmosphere/vintage-decor-1.jpg',
    alt: 'Vintage Irish pub decor',
    caption: 'Stories on every wall',
    size: 'tall',
  },
  {
    src: '/images/atmosphere/warm-light-1.jpg',
    alt: 'Warm ambient lighting',
    caption: 'Amber glow',
    size: 'medium',
  },
]

const features = [
  {
    icon: Flame,
    title: 'Real Turf Fire',
    description: 'Nothing beats the scent of burning turf on a rainy evening',
  },
  {
    icon: Music,
    title: 'Live Trad',
    description: 'Traditional Irish music sessions every Thursday & Saturday',
  },
  {
    icon: Clock,
    title: 'Since 1852',
    description: 'Six generations of Murphy hospitality',
  },
  {
    icon: Users,
    title: 'Locals\' Favourite',
    description: 'Where regulars become friends and friends become family',
  },
]

export default function PubAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      ref={containerRef}
      className="py-24 bg-wood-950 relative overflow-hidden"
    >
      {/* Ambient warm glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-whiskey-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-whiskey-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="badge mb-6">
            <span>Step Inside</span>
          </div>
          <h2 className="section-heading">
            More Than a <span className="text-whiskey-400">Pub</span>
          </h2>
          <p className="text-xl text-paper-200/80 max-w-2xl mx-auto mt-4">
            From the warmth of the turf fire to the craic at the bar,
            this is where Cork comes to feel at home
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[150px]">
          {atmosphereImages.map((image, index) => {
            // Dynamic grid spans based on size
            const gridClasses = {
              large: 'col-span-2 row-span-2',
              tall: 'col-span-1 md:col-span-2 row-span-2',
              wide: 'col-span-2 row-span-1',
              medium: 'col-span-1 md:col-span-2 row-span-1',
            }[image.size] || 'col-span-1 row-span-1'

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${gridClasses} group relative overflow-hidden rounded-xl cursor-pointer`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Caption - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-cream-300 text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-whiskey-600/20 rounded-2xl mb-4 group-hover:bg-whiskey-600/30 transition-colors">
                <feature.icon size={28} className="text-whiskey-400" />
              </div>
              <h3 className="text-xl font-bold text-cream-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-paper-200/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-display italic text-whiskey-400 max-w-3xl mx-auto">
            "This isn't just where we serve pints—it's where Cork comes home."
          </p>
          <p className="text-paper-200/60 mt-4">
            — Tom Murphy, 6th Generation Owner
          </p>
        </motion.div>
      </div>
    </section>
  )
}
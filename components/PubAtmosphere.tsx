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
    title: 'Since 1952',
    description: 'Three generations of Murphy hospitality',
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

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-cream-300 text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.caption}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-whiskey-500/0 group-hover:border-whiskey-500/60 transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-hover p-5 md:p-6 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-whiskey-600/20 flex items-center justify-center group-hover:bg-whiskey-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-whiskey-400" />
                </div>
                <h3 className="text-cream-300 font-semibold mb-2">{feature.title}</h3>
                <p className="text-paper-200/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-display text-cream-300/90 italic max-w-3xl mx-auto leading-relaxed">
            "There are no strangers here, only friends you haven't met yet"
          </blockquote>
          <cite className="block mt-4 text-whiskey-500 text-sm tracking-widest uppercase">
            — An old Irish saying
          </cite>
        </motion.div>
      </div>
    </section>
  )
}

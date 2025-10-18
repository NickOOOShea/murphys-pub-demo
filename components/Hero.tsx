'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

interface HeroProps {
  headline: string
  tagline: string
  backgroundImage: string
  ctaButtons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary'
  }>
}

export default function Hero({ headline, tagline, backgroundImage, ctaButtons }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effect - background moves slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 250])

  return (
    <div ref={ref} className="relative h-screen lg:h-[80vh] overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay with specific pub green tint */}
        <div className="absolute inset-0 bg-pub-800/70" />

        {/* Blurred edge vignette - evokes candlelight */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(45, 50, 31, 0.6) 100%)'
          }}
        />
      </motion.div>

      {/* Floating decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-pub-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Headline with text gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            <span className="inline-block bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
              {headline}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-light tracking-wide"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtons.map((button, index) => (
              <motion.div
                key={button.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.2), ease: "easeOut" }}
              >
                <Link
                  href={button.href}
                  className={`
                    inline-block px-8 py-4 rounded-lg font-semibold text-lg
                    transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                    ${button.variant === 'primary'
                      ? 'bg-amber-500 text-pub-900 hover:bg-amber-400'
                      : 'bg-pub-700 text-white hover:bg-pub-600 border-2 border-amber-500/50'
                    }
                  `}
                >
                  {button.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  )
}

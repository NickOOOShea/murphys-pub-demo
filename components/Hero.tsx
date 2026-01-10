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

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
      >
        {/* Photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Warm overlay - Irish green atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-950/90 via-wood-900/80 to-wood-950/95" />

        {/* Green glow from center */}
        <div className="absolute inset-0 bg-warm-glow" />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(26, 21, 18, 0.5) 100%)`
          }}
        />
      </motion.div>

      {/* Floating green glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20"
      >
        <div className="section-container text-center">
          {/* Est. Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="badge">
              <span>Est. 1952 • Cork, Ireland</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold mb-6 text-cream-300 text-shadow-glow"
          >
            {headline}
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto mb-8 rounded-full"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-xl md:text-2xl text-paper-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {ctaButtons.map((button, index) => (
              <Link
                key={button.text}
                href={button.href}
                className={button.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}
              >
                {button.text}
              </Link>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-12 text-paper-200/60 text-sm tracking-widest uppercase"
          >
            Serving Cork's finest pints for 70+ years
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-paper-200/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}
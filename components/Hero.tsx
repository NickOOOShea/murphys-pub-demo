'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Beer } from 'lucide-react'
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
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
      >
        {/* Pub photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Warm overlay - creates cozy pub atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-pub-900/85 via-pub-800/75 to-pub-900/90" />

        {/* Candlelight vignette - darker edges, warm center */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center,
                transparent 0%,
                transparent 30%,
                rgba(58, 46, 35, 0.4) 70%,
                rgba(26, 15, 10, 0.6) 100%
              )
            `
          }}
        />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: 'url("/textures/wood-grain.png")',
            backgroundSize: '400px 400px',
          }}
        />
      </motion.div>

      {/* Warm floating glows - like candlelight */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brass-500/20 rounded-full blur-3xl animate-candle"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl animate-candle"
        />
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 6 }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-burgundy-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="container mx-auto text-center">

          {/* Small decorative element above headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brass-500/10 border border-brass-500/30">
              <Beer className="text-brass-400" size={20} />
              <span className="text-brass-300 font-handwriting text-lg">Est. 1952</span>
              <Beer className="text-brass-400" size={20} />
            </div>
          </motion.div>

          {/* Headline - dramatic entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold mb-6 text-cream-100"
          >
            <span className="inline-block text-gradient-brass text-shadow-glow">
              {headline}
            </span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-32 h-1 bg-brass-gradient mx-auto mb-8 rounded-full shadow-glow-brass"
          />

          {/* Tagline - warm and inviting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="text-xl md:text-3xl text-cream-200 mb-12 max-w-4xl mx-auto font-body leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons - staggered entrance */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {ctaButtons.map((button, index) => (
              <motion.div
                key={button.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.6 + (index * 0.15) },
                  y: { duration: 0.5, delay: 1.6 + (index * 0.15) }
                }}
              >
                <Link
                  href={button.href}
                  className={`
                    inline-flex items-center gap-2 px-10 py-5 rounded-lg font-bold text-lg
                    transition-all duration-300 shadow-lifted hover:shadow-lifted
                    ${button.variant === 'primary'
                      ? 'bg-brass-600 text-cream-100 hover:bg-brass-500 shadow-brass border-2 border-brass-400/50'
                      : 'bg-pub-800/80 backdrop-blur-sm text-cream-100 hover:bg-pub-700 border-2 border-brass-500/40 hover:border-brass-400'
                    }
                  `}
                >
                  {button.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social proof or small detail */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-12 text-cream-300/70 text-sm tracking-widest uppercase font-body"
          >
            Serving Cork's finest pints for over 70 years
          </motion.p>

        </div>
      </motion.div>

      {/* Animated scroll indicator - bounces gently */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1], y: [0, 12, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.6 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream-300/60 text-xs uppercase tracking-wider font-body">Scroll</span>
        <ChevronDown className="text-brass-400/70" size={28} strokeWidth={2.5} />
      </motion.div>
    </div>
  )
}

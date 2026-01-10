'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutSectionProps {
  story: string
  heritage: string
  image?: string
}

export default function AboutSection({ story, heritage, image }: AboutSectionProps) {
  return (
    <section className="py-24 bg-wood-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Heritage Photo */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lifted"
            >
              {image ? (
                <Image
                  src={image}
                  alt="Murphy's Pub in 1952"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  style={{ filter: 'sepia(0.6) contrast(1.1)' }}
                />
              ) : (
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-wood-800 to-wood-900 flex items-center justify-center">
                  <p className="text-paper-200">Vintage Photo</p>
                </div>
              )}

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-whiskey-500/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-whiskey-500/40 rounded-bl-lg" />
            </motion.div>
          </div>

          {/* Story Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="section-heading"
            >
              <span className="text-gradient-whiskey">
                Three Generations
              </span>
              <br />
              of Proper Pints
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-paper-200 text-lg leading-relaxed mb-8">
                {story}
              </p>

              {/* Heritage Quote */}
              <div className="relative my-10 py-6 border-t border-b border-wood-700">
                <p className="text-xl font-display italic text-whiskey-400 text-center">
                  "{heritage}"
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="text-center p-5 bg-wood-800 rounded-xl border border-wood-700">
                  <div className="text-3xl font-bold text-whiskey-500 font-display">1952</div>
                  <div className="text-sm text-paper-200/70 mt-1">Established</div>
                </div>
                <div className="text-center p-5 bg-wood-800 rounded-xl border border-wood-700">
                  <div className="text-3xl font-bold text-whiskey-500 font-display">3</div>
                  <div className="text-sm text-paper-200/70 mt-1">Generations</div>
                </div>
                <div className="text-center p-5 bg-wood-800 rounded-xl border border-wood-700">
                  <div className="text-3xl font-bold text-whiskey-500 font-display">70+</div>
                  <div className="text-sm text-paper-200/70 mt-1">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

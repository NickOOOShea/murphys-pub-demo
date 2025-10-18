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
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Heritage Photo (Sepia) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-2xl"
            >
              {image ? (
                <Image
                  src={image}
                  alt="Murphy's Pub in 1952"
                  width={600}
                  height={800}
                  className="w-full h-auto sepia"
                  style={{ filter: 'sepia(0.8) contrast(1.1)' }}
                />
              ) : (
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-amber-100 to-pub-100 flex items-center justify-center">
                  <p className="text-pub-600 text-lg">Vintage Photo</p>
                </div>
              )}

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-amber-400/50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-amber-400/50" />
            </motion.div>
          </div>

          {/* Story Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-pub-900"
            >
              <span className="bg-gradient-to-r from-pub-700 to-pub-500 bg-clip-text text-transparent">
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
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                {story}
              </p>

              {/* Heritage Script Text */}
              <div className="relative my-8 py-6 border-t border-b border-pub-300">
                <p className="text-2xl font-serif italic text-pub-700 text-center">
                  "{heritage}"
                </p>
              </div>

              {/* Optional Timeline (Simple) */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600">1952</div>
                  <div className="text-sm text-gray-600 mt-1">Established</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-gray-600 mt-1">Generations</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600">70+</div>
                  <div className="text-sm text-gray-600 mt-1">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

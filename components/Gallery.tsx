'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: number
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-4 md:gap-6`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer border border-wood-800 shadow-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
            />

            {/* Warm overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Story caption - fades in on hover */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-cream-300 text-sm italic font-light">
                    "{image.caption}"
                  </p>
                </div>
              )}
            </div>

            {/* Decorative whiskey corner glow */}
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-whiskey-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-wood-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-3 bg-wood-900/80 hover:bg-wood-800 rounded-full transition-colors border border-wood-700"
            >
              <X size={28} className="text-cream-300" />
            </button>

            {/* Navigation buttons */}
            {selectedIndex !== null && selectedIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-wood-900/80 hover:bg-wood-800 rounded-full transition-colors border border-wood-700"
              >
                <ChevronLeft size={28} className="text-cream-300" />
              </button>
            )}

            {selectedIndex !== null && selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-wood-900/80 hover:bg-wood-800 rounded-full transition-colors border border-wood-700"
              >
                <ChevronRight size={28} className="text-cream-300" />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />

              {/* Caption in lightbox */}
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wood-950/95 to-transparent p-6">
                  <p className="text-cream-300 text-center italic text-lg">
                    "{selectedImage.caption}"
                  </p>
                </div>
              )}
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-wood-900/80 rounded-full border border-wood-700">
              <span className="text-paper-200 text-sm">
                {(selectedIndex ?? 0) + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

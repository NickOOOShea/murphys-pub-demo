'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-pub-800 text-white sticky top-0 z-40 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-amber-400 transition">
            Murphy's Pub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative py-2 transition-colors
                    ${isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}
                  `}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                    />
                  )}
                </Link>
              )
            })}

            {/* Phone Number */}
            <a
              href="tel:+353214271234"
              className="flex items-center gap-2 bg-amber-500 text-pub-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all hover:scale-105"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">+353 21 427 1234</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-pub-700 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-pub-800 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      text-lg font-semibold transition-colors
                      ${isActive ? 'text-amber-400' : 'text-white hover:text-amber-400'}
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Phone Number in Mobile Menu */}
              <a
                href="tel:+353214271234"
                className="flex items-center gap-2 bg-amber-500 text-pub-900 px-4 py-3 rounded-lg font-semibold justify-center hover:bg-amber-400 transition"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden"
          style={{ top: '64px' }}
        />
      )}
    </header>
  )
}

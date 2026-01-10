'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-wood-950/95 backdrop-blur-md shadow-warm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-glow-emerald">
              <span className="text-white font-display font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-cream-300">
                Murphy's
              </span>
              <span className="text-xs text-paper-200 -mt-1 tracking-widest uppercase">
                Est. 1952
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-paper-100 hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}

            {/* Phone CTA */}
            <a
              href="tel:+353214271234"
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">021 427 1234</span>
              <span className="lg:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-paper-100 hover:text-emerald-400 transition-colors rounded-lg hover:bg-wood-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-wood-950/80 backdrop-blur-sm md:hidden"
              style={{ top: '72px' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-[72px] right-0 bottom-0 w-72 bg-wood-900 border-l border-wood-800 shadow-lifted md:hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-emerald-600/20 text-emerald-400'
                          : 'text-paper-100 hover:bg-wood-800 hover:text-emerald-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                {/* Mobile Phone CTA */}
                <div className="border-t border-wood-800 pt-4 mt-4">
                  <a
                    href="tel:+353214271234"
                    className="btn-primary w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    021 427 1234
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
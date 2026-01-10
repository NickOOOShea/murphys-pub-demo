import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-wood-900 border-t border-wood-800">
      <div className="section-container py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-whiskey-600 rounded-xl flex items-center justify-center">
                <span className="text-wood-950 font-display font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-cream-300">Murphy's Pub</h3>
                <p className="text-xs text-paper-200/60 tracking-wider uppercase">Est. 1952</p>
              </div>
            </div>
            <p className="text-paper-200 mb-6 leading-relaxed">
              Traditional Irish hospitality for over 70 years. Family-owned, locally loved.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/murphyspubcork"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-wood-800 hover:bg-whiskey-600 text-paper-100 hover:text-wood-950 rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/murphyspubcork"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-wood-800 hover:bg-whiskey-600 text-paper-100 hover:text-wood-950 rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream-300 mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-paper-200 hover:text-whiskey-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream-300 mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+353214271234"
                className="flex items-center gap-3 text-paper-200 hover:text-whiskey-400 transition-colors"
              >
                <div className="p-2 bg-wood-800 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span>021 427 1234</span>
              </a>
              <a
                href="mailto:hello@murphyspub.ie"
                className="flex items-center gap-3 text-paper-200 hover:text-whiskey-400 transition-colors"
              >
                <div className="p-2 bg-wood-800 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@murphyspub.ie</span>
              </a>
              <div className="flex items-start gap-3 text-paper-200">
                <div className="p-2 bg-wood-800 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>12 Main Street<br />Cork, Ireland</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-cream-300 mb-4">Opening Hours</h4>
            <div className="space-y-2 text-paper-200">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-whiskey-400">12:00 - 23:30</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-whiskey-400">12:00 - 01:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-whiskey-400">12:30 - 23:00</span>
              </div>
              <p className="mt-4 text-sm text-paper-300/60 italic">
                Kitchen closes 30 mins before closing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-wood-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-paper-300/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Murphy's Pub. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-whiskey-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-whiskey-400 transition-colors">Terms</Link>
              <a
                href="https://connecteire.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-whiskey-400 transition-colors"
              >
                Website by <span className="font-semibold">Connecteire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

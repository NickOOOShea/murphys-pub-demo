import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-pub-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Murphy's Pub</h3>
            <p className="text-gray-300 mb-4">
              Traditional Irish hospitality since 1952. Family-owned, locally loved.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/murphyspubcork"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pub-700 hover:bg-amber-500 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/murphyspubcork"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pub-700 hover:bg-amber-500 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/murphyspub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pub-700 hover:bg-amber-500 rounded-full transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Quick Links</h4>
            <div className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-amber-400 transition">Home</Link>
              <Link href="/menu" className="block hover:text-amber-400 transition">Menu</Link>
              <Link href="/events" className="block hover:text-amber-400 transition">Events</Link>
              <Link href="/gallery" className="block hover:text-amber-400 transition">Gallery</Link>
              <Link href="/contact" className="block hover:text-amber-400 transition">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+353214271234" className="flex items-center gap-2 hover:text-amber-400 transition">
                <Phone size={16} />
                <span>+353 21 427 1234</span>
              </a>
              <a href="mailto:hello@murphyspub.ie" className="flex items-center gap-2 hover:text-amber-400 transition">
                <Mail size={16} />
                <span>hello@murphyspub.ie</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>12 Main Street<br />Cork, Ireland<br />T12 X456</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Opening Hours</h4>
            <div className="text-gray-300 space-y-1 text-sm">
              <p>Mon-Thu: 12:00 - 23:30</p>
              <p>Fri-Sat: 12:00 - 01:00</p>
              <p>Sunday: 12:30 - 23:00</p>
              <p className="mt-3 text-xs italic text-gray-400">
                Kitchen closes 30 minutes before closing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pub-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Murphy's Pub. All rights reserved.</p>

            {/* Powered by Connecteire Badge */}
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-amber-400 transition-colors group"
            >
              <span>Website by</span>
              <span className="font-semibold group-hover:underline">Connecteire</span>
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

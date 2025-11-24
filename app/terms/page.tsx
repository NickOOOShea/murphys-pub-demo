'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pub-50 to-pub-100 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IE')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this website (murphyspub.ie), you agree to these Terms of Service. If you do not agree, please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">2. Website Purpose</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website provides information about Murphy's Pub, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Opening hours and location</li>
                <li>Food and drink menus</li>
                <li>Upcoming events and live music</li>
                <li>Contact information and table reservations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">3. Reservations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you make a table reservation:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>We'll confirm your reservation by phone, email, or text</li>
                <li>Please arrive within 15 minutes of your reservation time</li>
                <li>If you need to cancel, please let us know as soon as possible</li>
                <li>We reserve the right to release tables if you're more than 15 minutes late without notice</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For large groups (8+ people), we may require a deposit or prepayment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">4. Menu & Pricing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Menu items, prices, and availability are subject to change. While we make every effort to keep the website up-to-date:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Seasonal items may not always be available</li>
                <li>Prices may change without notice</li>
                <li>We reserve the right to substitute ingredients when necessary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">5. Events & Entertainment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We host live music and events regularly. Please note:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Event dates and times are subject to change</li>
                <li>We reserve the right to cancel events due to unforeseen circumstances</li>
                <li>Entry to events may be subject to availability or cover charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">6. Responsible Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Murphy's Pub is committed to responsible service of alcohol:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You must be 18 or older to purchase alcohol</li>
                <li>We may request ID if you appear under 25</li>
                <li>We reserve the right to refuse service to anyone for any reason</li>
                <li>Disorderly or abusive behavior will not be tolerated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">7. Website Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website (text, photos, logos, design) is owned by Murphy's Pub or used with permission. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Copy or republish our content without permission</li>
                <li>Use our photos for commercial purposes</li>
                <li>Scrape data from this website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">8. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to social media or other external sites. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">9. Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to keep information accurate and up-to-date, we cannot guarantee that all information on this website is current or error-free. For the most current information, please call us or visit in person.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>This website is provided "as is" without warranties</li>
                <li>We are not liable for any damages arising from use of this website</li>
                <li>We are not responsible for website downtime or technical errors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">11. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of this website is also governed by our <Link href="/privacy" className="text-pub-600 hover:underline font-semibold">Privacy Policy</Link>. Please review it to understand how we collect and use your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. The "Last updated" date at the top will reflect any changes. Continued use of the website indicates acceptance of updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">13. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of Ireland. Any disputes will be subject to the exclusive jurisdiction of the Irish courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-pub-800">14. Contact Us</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms, contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Murphy's Pub</strong><br />
                  12 Main Street, Cork, Ireland T12 X456<br />
                  Phone: <a href="tel:+353214271234" className="text-pub-600 hover:underline">+353 21 427 1234</a><br />
                  Email: <a href="mailto:hello@murphyspub.ie" className="text-pub-600 hover:underline">hello@murphyspub.ie</a>
                </p>
              </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8">
              <p className="text-gray-700 font-semibold mb-2">Thank you for visiting!</p>
              <p className="text-gray-700">
                We look forward to welcoming you to Murphy's Pub. Sláinte! 🍺
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

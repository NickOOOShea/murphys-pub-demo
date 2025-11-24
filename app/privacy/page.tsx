import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <header className="bg-dark text-cream px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="hover:text-gold">Murphy's Pub</Link>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-dark/80">
            <p>
              Murphy's Pub respects your privacy. This policy explains how we handle
              any information you provide to us.
            </p>

            <h2 className="text-2xl mt-8">What we collect</h2>
            <p>
              If you contact us via phone or email, we keep your details only to respond
              to your enquiry. We don't sell or share your information with anyone.
            </p>

            <h2 className="text-2xl mt-8">Cookies</h2>
            <p>
              This website doesn't use tracking cookies or analytics.
            </p>

            <h2 className="text-2xl mt-8">Contact</h2>
            <p>
              Questions? Email us at hello@murphyspub.ie
            </p>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-gold hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

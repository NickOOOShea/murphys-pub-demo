import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen">
      <header className="bg-dark text-cream px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="hover:text-gold">Murphy's Pub</Link>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl mb-8">Terms of Service</h1>

          <div className="space-y-6 text-dark/80">
            <p>
              Welcome to Murphy's Pub website. By using this site, you agree to these terms.
            </p>

            <h2 className="text-2xl mt-8">Use of this website</h2>
            <p>
              This website is for informational purposes only. Opening hours and
              menu items may change without notice.
            </p>

            <h2 className="text-2xl mt-8">Reservations</h2>
            <p>
              Table reservations are subject to availability. Please call to confirm
              large group bookings.
            </p>

            <h2 className="text-2xl mt-8">Licensing</h2>
            <p>
              Murphy's Pub operates under Irish licensing laws. We reserve the right
              to refuse service to anyone.
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

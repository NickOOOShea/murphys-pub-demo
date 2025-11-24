import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Simple palette: dark brown, cream, gold accent
        'dark': '#1a1512',
        'brown': '#2d241e',
        'cream': '#f5f2eb',
        'gold': '#c9a227',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config

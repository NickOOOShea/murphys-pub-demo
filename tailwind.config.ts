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
        // Murphy's Pub - "The Emerald" Design System
        // Irish green theme, traditional, warm lighting, wood tones

        // Primary: Irish Green
        'emerald': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a', // Primary
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },

        // Secondary: Dark Wood (unchanged - complements green)
        'wood': {
          50: '#f7f5f3',
          100: '#ede7e1',
          200: '#d9cec2',
          300: '#c0ad9a',
          400: '#a68a70',
          500: '#8d6f55',
          600: '#735a45',
          700: '#5d4839',
          800: '#4d3c30',
          900: '#2C1810', // Secondary
          950: '#1A1512', // Background
        },

        // Accent: Cream Foam (unchanged - works with green)
        'cream': {
          50: '#fffefb',
          100: '#fefcf6',
          200: '#fcf7ec',
          300: '#F5E6D3', // Accent
          400: '#edd5ba',
          500: '#e3c29e',
          600: '#d4a87a',
          700: '#c08d5a',
          800: '#a5754b',
          900: '#896140',
        },

        // Text: Aged Paper (unchanged)
        'paper': {
          50: '#fdfcfa',
          100: '#E8DFD0', // Text on dark
          200: '#d8cab5',
          300: '#c5b39a',
          400: '#b19a7d',
          500: '#9d8264',
          600: '#8b6f55',
          700: '#735b47',
          800: '#604c3d',
          900: '#514133',
        },

        // Stout colors for special elements (unchanged)
        'stout': {
          black: '#0d0907',
          brown: '#1a0f0a',
          cream: '#f4f1de',
          head: '#fffef8',
        },

        // Gold accents (complement to green)
        'gold': {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        'body': ['var(--font-source-sans)', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'pub-gradient': 'linear-gradient(180deg, #1A1512 0%, #2C1810 50%, #1A1512 100%)',
        'warm-glow': 'radial-gradient(ellipse at center, rgba(22, 163, 74, 0.15) 0%, transparent 70%)',
        'wood-grain': 'url("/textures/wood-grain.png")',
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(44, 24, 16, 0.4)',
        'glow-emerald': '0 0 40px -8px rgba(22, 163, 74, 0.4)',
        'lifted': '0 20px 50px -10px rgba(26, 21, 18, 0.5)',
        'card': '0 4px 20px -4px rgba(26, 21, 18, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(245, 230, 211, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(22, 163, 74, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(22, 163, 74, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.875rem',
        'xl': '1.125rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
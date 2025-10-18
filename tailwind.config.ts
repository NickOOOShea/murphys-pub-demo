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
        // Murphy's Pub theme colors
        'pub': {
          50: '#f5f7f0',
          100: '#e8edd8',
          200: '#d3dcb3',
          300: '#b6c785',
          400: '#96ad5c',
          500: '#6d8439',
          600: '#556927',
          700: '#455322',
          800: '#393f27',
          900: '#2d321f',
        },
        'amber': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Irish-inspired color palette
        'irish-green': {
          50: '#f0f9f4',
          100: '#daf2e4',
          200: '#b8e6cb',
          300: '#87d4a8',
          400: '#52ba7f',
          500: '#006847',  // Primary Irish green
          600: '#00563a',
          700: '#00442e',
          800: '#003222',
          900: '#002016',
        },
        'gold-orange': {
          50: '#fff8ed',
          100: '#ffefd5',
          200: '#ffdaa8',
          300: '#ffbe70',
          400: '#ff9a36',
          500: '#ff8c00',  // Vibrant gold/orange
          600: '#e07000',
          700: '#b85600',
          800: '#8f4100',
          900: '#662d00',
        },
        'sky-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e3fe',
          300: '#7dd0fd',
          400: '#3db7fa',
          500: '#0ea5e9',  // Bright sky blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'cream': {
          50: '#fdfdf9',
          100: '#faf9f0',
          200: '#f5f3e1',
          300: '#edebd2',
          400: '#e4e1c3',
          500: '#d4d0b0',
          600: '#b5b194',
          700: '#96927a',
          800: '#6e6b5a',
          900: '#47453a',
        },
      },
      fontFamily: {
        'display': ['Merriweather', 'Georgia', 'serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'irish-gradient': 'linear-gradient(135deg, #006847 0%, #00563a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ff8c00 0%, #ff9a36 100%)',
        'hero-gradient': 'linear-gradient(180deg, #ffffff 0%, #f0f9f4 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'irish': '0 10px 40px -10px rgba(0, 104, 71, 0.3)',
        'gold': '0 10px 40px -10px rgba(255, 140, 0, 0.3)',
        'glow': '0 0 30px rgba(0, 104, 71, 0.2)',
        'glow-gold': '0 0 30px rgba(255, 140, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config

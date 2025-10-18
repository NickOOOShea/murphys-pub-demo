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
        // Warm, Authentic Pub Palette - Deep browns, brass, and cream
        'pub': {
          50: '#f7f5f3',
          100: '#ede7e1',
          200: '#d9cec2',
          300: '#c5b5a3',
          400: '#aa9379',
          500: '#8c7456',  // Medium oak
          600: '#735d46',  // Deep wood
          700: '#5d4a38',  // Dark wood
          800: '#4a3a2d',  // Mahogany
          900: '#3a2e23',  // Almost black, rich brown
        },
        // Brass & Gold accents - aged, not shiny
        'brass': {
          50: '#fefbf3',
          100: '#fdf4df',
          200: '#fbe8bf',
          300: '#f7d89e',
          400: '#f0c574',  // Light brass
          500: '#d4a657',  // Aged brass
          600: '#b8860b',  // Dark gold
          700: '#996d09',  // Deep brass
          800: '#7a5607',  // Tarnished gold
          900: '#5c4105',  // Dark bronze
        },
        // Cream & Beige - for text on dark backgrounds
        'cream': {
          50: '#ffffff',
          100: '#fdfdf9',
          200: '#faf9f0',
          300: '#f5f3e1',
          400: '#edebd2',
          500: '#e4e1c3',  // Warm cream
          600: '#d4d0b0',  // Darker cream
          700: '#b5b194',
          800: '#96927a',
          900: '#6e6b5a',
        },
        // Stout - Guinness black and cream head
        'stout': {
          black: '#0d0907',
          brown: '#1a0f0a',
          cream: '#f4f1de',
          head: '#fffef8',
        },
        // Deep Forest Green - not bright
        'forest': {
          50: '#f3f6f4',
          100: '#e1ebe4',
          200: '#c4d7c9',
          300: '#9dbfa6',
          400: '#6d9978',
          500: '#4a7556',  // Deep moss
          600: '#3d5f47',  // Forest floor
          700: '#2d4735',  // Dark evergreen
          800: '#243829',  // Deep forest
          900: '#1a2a1e',  // Almost black green
        },
        // Warm Amber - for highlights
        'amber': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Bright amber
          600: '#d97706',  // Deep amber
          700: '#b45309',  // Rich amber
          800: '#92400e',
          900: '#78350f',
        },
        // Burgundy - for rich accents
        'burgundy': {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f6d0d7',
          300: '#eeadb9',
          400: '#e37f93',
          500: '#d4556d',  // Wine red
          600: '#b83d55',  // Deep wine
          700: '#932e43',  // Burgundy
          800: '#6e2332',  // Dark burgundy
          900: '#4a1821',  // Almost black red
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Lora', 'Georgia', 'serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'pub-gradient': 'linear-gradient(135deg, #3a2e23 0%, #4a3a2d 100%)',
        'brass-gradient': 'linear-gradient(135deg, #d4a657 0%, #b8860b 100%)',
        'warm-gradient': 'linear-gradient(180deg, #faf9f0 0%, #edebd2 100%)',
        'wood-texture': 'url("/textures/wood-grain.png")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -20px) rotate(3deg)' },
          '66%': { transform: 'translate(-15px, 15px) rotate(-3deg)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
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
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(58, 46, 35, 0.3)',
        'brass': '0 10px 40px -10px rgba(212, 166, 87, 0.3)',
        'glow-brass': '0 0 30px rgba(212, 166, 87, 0.2)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
        'lifted': '0 20px 50px -10px rgba(58, 46, 35, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config

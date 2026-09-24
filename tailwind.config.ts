import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f8fb',
          100: '#daeef5',
          200: '#b1daeb',
          300: '#7bbfda',
          400: '#419dc3',
          500: '#2581a8',
          600: '#1c678d',
          700: '#1a5472',   // primary CTA background
          800: '#174460',
          900: '#112f42',   // footer background
          950: '#091e2b',
        },
        warm: {
          50:  '#fdf7f0',
          100: '#faebdb',
          200: '#f3cfb0',
          300: '#e9ab7a',
          400: '#da8242',
          500: '#c76a26',
          600: '#a8551a',   // accent
          700: '#884215',
          800: '#6b3212',
          900: '#50240e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #112f42 0%, #1a5472 60%, #1c678d 100%)',
      },
    },
  },
  plugins: [],
}

export default config

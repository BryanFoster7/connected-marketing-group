/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22D3EE', // Vibrant cyan
          dark: '#06B6D4',
          light: '#67E8F9',
        },
        secondary: {
          DEFAULT: '#F472B6', // Soft pink
          dark: '#EC4899',
          light: '#F9A8D4',
        },
        dark: {
          DEFAULT: '#1C1C1E', // Charcoal
          lighter: '#2C2C2E',
          lightest: '#3A3A3C',
        },
        light: {
          DEFAULT: '#F9FAFB',
          darker: '#F3F4F6',
          darkest: '#E5E7EB',
        },
        accent: {
          purple: '#A78BFA',
          teal: '#2DD4BF',
          amber: '#FCD34D',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.15)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
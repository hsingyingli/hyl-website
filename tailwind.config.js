/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textbounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1, 0.5)' },
          '40%': { transform: 'scale(1, 1.2)' },
          '50%': { transform: 'scale(0.8, 1)' },
          '60%': { transform: 'scale(1, 1.2)' },
          '75%': { transform: 'scale(0.8, 1)' }
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-40px)'
          },
          '75%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: 1,

          }
        }
      },
      animation: {
        textbounce: 'textbounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

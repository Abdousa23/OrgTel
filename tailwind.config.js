/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B28CC',
        'secondary':'#6656E1'
      },
      keyframes: {
        'slide-show': {
          '0%': { opacity: 1 },
          '25%': { opacity: 0 },
          '50%': { opacity: 1 },
          '75%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'slide-show': 'slide-show 12s infinite',
      },
      animationDelay: {
        '0': '0ms',
        '1': '4s',
        '2': '8s',
        '3': '12s',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          500: "#64ffda"
        }
      },
      boxShadow: {
        'glow': '0 0 0 2px rgba(100,255,218,0.2), 0 0 20px rgba(100,255,218,0.15)'
      }
    },
  },
  plugins: [],
}

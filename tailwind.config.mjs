/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f5',
          100: '#cdd4de',
          200: '#9bafc3',
          500: '#2D3A4B',
          700: '#1e2d3d',
          800: '#162230',
          900: '#2D3A4B',
          950: '#0d1724',
        },
        gold: {
          300: '#f9d87a',
          400: '#f5c842',
          500: '#F6AC06',
          600: '#d48f00',
          700: '#a86e00',
        },
        verma: {
          dark:    '#2D3A4B',
          darker:  '#162230',
          darkest: '#041121',
          red:     '#FC0303',
          green:   '#2E8D08',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'Arial', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

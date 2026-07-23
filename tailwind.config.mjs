/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef7',
          100: '#c5d3e8',
          200: '#9eb6d8',
          500: '#2d5a9e',
          700: '#1a3a6b',
          800: '#122d56',
          900: '#0b1f3d',
          950: '#070f20',
        },
        gold: {
          300: '#f0d08a',
          400: '#e8be62',
          500: '#d4a853',
          600: '#b8882e',
          700: '#8f6620',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

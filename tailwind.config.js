/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pitch: '#07120e',
        flood: '#0b1f2a',
        signal: '#19e58c',
        live: '#ff335f',
        replay: '#35a7ff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(25, 229, 140, 0.18)',
        live: '0 0 38px rgba(255, 51, 95, 0.22)',
      },
    },
  },
  plugins: [],
}

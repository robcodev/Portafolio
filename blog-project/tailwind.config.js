/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      fontFamily: {
          'sans': ['azo-mono', 'sans-serif'],

          'serif': ['recoleta', 'serif']
      },
      colors: {
          'redRob': '#E84141',
          'blueRob': '#334D9D',
          'blackRob': '#000000'
      },
    extend: {},
  },
  plugins: [],
}


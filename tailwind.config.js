/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './cv.html',
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      fontFamily: {
          'sans': ['Anton SC', 'sans-serif'],
          'mono': ['azo-mono', 'monospace']
      },
      colors: {
          'redRob': '#E84141',
          'blueRob': '#334D9D',
          'blackRob': '#000000',
          'brownRob': '#603324',
          'whiteRob': '#FAF7EB',
          'yellowRob': '#F9D37F'
      },
    extend: {
          aspectRatio: {
              '4/3': '4/3',
          }
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}


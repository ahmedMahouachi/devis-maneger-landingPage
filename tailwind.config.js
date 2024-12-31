/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        5: '-5deg',
        4: '5deg',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },

      colors: {
        darkBlue: '#041136',
        trBlue: '#1170EA',
        blueBg: '#DBE9FE',
        trWhite: '#F7F6F5',
        primaryYellow:'#FC963A'
      },
      fontFamily: {
        outfit: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

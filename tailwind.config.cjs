/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'sans-serif',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      backgroundImage: {
        blurImg: "url('/src/assets/img/bg.jpeg')",
      },
      animation: {
        'customAni': 'slowSpring 2s infinite ease alternate',
        'textHover': 'moveText .5s linear both',
        'mouseScroll': 'mouseScrolling 2s infinite',
      },
      keyframes: {
        slowSpring: {
          'to': { transform: 'translateY(40px)' },
        },
        moveText: {
          'to': { width: '100%' },
        },
        mouseScrolling :{
          'from': { opacity: '1', top: '10px' },
          'to': { opacity: '0', top: '60px' },
        },
      }
    },
  },
  plugins: [],
};

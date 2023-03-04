/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Nunito',
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
        'customAni': 'slowSpring 3s infinite ease alternate',
      },
      keyframes: {
        slowSpring: {
          'to': { transform: ' translateY(30px)' },
        }
      }
    },
  },
  plugins: [],
};

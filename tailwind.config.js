/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      'white': '#F5F3F5',
      'black': '#111111',
    },
    extend: {
      spacing: {
        'projectheight': '644px'
      },
      linearGradientColors: {
        'transparent-black': ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(45deg, hsl(60, 100%, 70%) 0%, hsl(55, 90%, 65%) 8.4%, hsl(50, 80%, 60%) 15.5%, hsl(45, 70%, 55%) 21.4%, hsl(40, 60%, 50%) 26.5%, hsl(35, 50%, 45%) 31%, hsl(30, 40%, 40%) 35.2%, hsl(25, 30%, 35%) 39.3%, hsl(20, 20%, 30%) 43.5%, hsl(15, 10%, 25%) 48.2%, hsl(10, 20%, 20%) 53.6%, hsl(5, 30%, 15%) 60%, hsl(0, 40%, 10%) 67.5%, hsl(355, 50%, 15%) 76.5%, hsl(350, 60%, 20%) 87.3%, hsl(330, 100%, 70%) 100%)',
        'camo-gradient': 'linear-gradient(90deg, #78866B, #C3B091, #3B3A3B, #A7A07E)'
      },
      colors: {
        'edgyyellow': '#DCFC37',
        'white': '#F5F3F5',
        'black': '#111111'
      },
      fontFamily: {
        'monreg': ['Monument', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        // '36vh': { 'raw': '(min-height: 36vh)' },
        '2xl': '1540px',
        'xl': '1280px',
        'xs': '375px',

      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.diagonal-line::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          width: '2px',
          height: '150%',
          backgroundColor: 'currentColor',
          transform: 'rotate(45deg)',
          transformOrigin: 'top right',
        },
      });
    }
  ],
};

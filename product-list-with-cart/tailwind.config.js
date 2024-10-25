/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-400': '#C73B0F',
        'red-500': 'rgba(199, 59, 15, 0.75)',
        'rose-900': '#260F08',
        'rose-500': '#87635A',
        'rose-400': '#AD8A85',
        'rose-300': '#CAAFA7',
        'rose-100': '#F5EEEC',
        'rose-50': '#FCF8F6',
        'green-400': '#1EA575',
        'black-400': '#000000',
        'white-400': '#FFFFFF',
      },
      spacing: {
        50: '4px',
        100: '8px',
        150: '12px',
        200: '16px',
        300: '24px',
        400: '32px',
        500: '40px',
        1100: '88px',
      },
      fontFamily: {
        custom: ['RedHatText', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

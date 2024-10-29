/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-gray-100': 'hsl(0, 0%, 98%)',
        'neutral-gray-400': 'hsl(0, 0%, 52%)',
        'neutral-dark-blue-400': 'hsl(209, 23%, 22%)',
        'neutral-dark-blue-600': 'hsl(207, 26%, 17%)',
        'neutral-dark-blue-900': 'hsl(200, 15%, 8%)',
      },
      fontWeight: {
        light: '300',
        semibold: '600',
        extrabold: '800',
      },
    },
    fontFamily: {
      NunitoSans: ['NunitoSans', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
};

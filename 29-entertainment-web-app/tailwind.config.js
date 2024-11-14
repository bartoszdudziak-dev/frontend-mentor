/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ['Outfit', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'primary-dark-blue': '#10141E',
        'secondary-dark-blue': '#161D2F',
        'accent-red': '#FC4747',
        'accent-gray': '#5A698F',
      },
      fontWeight: {
        light: 300,
        medium: 500,
      },
    },
  },
  plugins: [],
};

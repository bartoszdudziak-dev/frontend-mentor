/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '730px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary-moderate-blue': 'hsl(238, 40%, 52%)',
        'primary-soft-red': 'hsl(358, 79%, 66%)',
        'primary-light-grayish-blue': 'hsl(239, 57%, 85%)',
        'primary-pale-red': 'hsl(357, 100%, 86%)',

        'neutral-dark-blue': 'hsl(212, 24%, 26%)',
        'neutral-grayish-blue': 'hsl(211, 10%, 45%)',
        'neutral-light-gray': 'hsl(223, 19%, 93%)',
        'neutral-very-light-gray': 'hsl(228, 33%, 97%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
      },
    },
  },

  plugins: [],
};

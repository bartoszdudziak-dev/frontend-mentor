/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-lime': 'hsl(61, 70%, 52%)',
        'primary-red': 'hsl(4, 69%, 50%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-slate-100': 'hsl(202, 86%, 94%)',
        'neutral-slate-300': 'hsl(203, 41%, 72%)',
        'neutral-slate-500': 'hsl(200, 26%, 54%)',
        'neutral-slate-700': 'hsl(200, 24%, 40%)',
        'neutral-slate-900': 'hsl(202, 55%, 16%)',
      },
      spacing: {
        100: '8px',
        150: '12px',
        200: '16px',
        300: '24px',
        400: '32px',
        500: '40px',
      },
      fontFamily: {
        PlusJakartaSans: [
          'Plus Jakarta Sans',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

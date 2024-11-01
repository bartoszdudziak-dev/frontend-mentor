/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        AtkinsonHyperlegible: [
          'Atkinson Hyperlegible',
          'system-ui',
          'sans-serif',
        ],
      },

      colors: {
        'primary-golden-500': '#FDA214',
        'primary-teal-700': '#304859',
        'primary-sky-300': '#BCCED9',
        'primary-mist-200': '#DFE7EC',

        'secondary-navy-800': '#152938',
        'secondary-steel-400': '#7191A5',
        'secondary-aqua-500': '#6395B8',
        'secondary-gray-100': '#F2F2F2',
        'secondary-white-50': '#FCFCFC',
      },
    },
  },
  plugins: [],
};

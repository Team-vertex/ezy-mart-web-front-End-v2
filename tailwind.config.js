import { dark } from './src/constants/color';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2.5rem',
        lg: '3.5rem',
        xl: '4.5rem',
        '2xl': '5.5rem',
      },
    },
    extend: {
      fontFamily: {
        sfPro: ['SFProDisplay', 'sans-serif'],
      },
      colors: {
        primary: dark.primary,
        background: dark.background,
        foreground: dark.foreground,
        secondary: dark.seconday,
      },
      boxShadow: {
        category: '0px 0px 11px 0px rgba(0, 0, 0, 0.1)',
        'select-category': '2px 2px 0px 4px rgba(3, 100, 60)',
      },
      backgroundImage: {
        auth: 'linear-gradient(45deg, #06948B 0%, #52796D 100%)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('data-active', '&[data-active=true]');
    },
  ],
};

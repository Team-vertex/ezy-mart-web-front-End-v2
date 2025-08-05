import { dark } from "./src/constants/color";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2.5rem",
        lg: "3.5rem",
        xl: "4.5rem",
        "2xl": "5.5rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        georgia: ["Georgia", "serif"],
        sinhala: ["Noto Sans Sinhala", "sans-serif"],
        "sans-sinhala": ["Noto Sans Sinhala", "Poppins", "sans-serif"],
      },
      colors: {
        primary: dark.primary,
        background: dark.background,
        foreground: dark.foreground,
      },
      boxShadow: {
        category: "0px 0px 11px 0px rgba(0, 0, 0, 0.1)",
        "select-category": "2px 2px 0px 4px rgba(3, 100, 60)",
      },
      backgroundImage: {
        auth: "linear-gradient(45deg, #06948B 0%, #52796D 100%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("data-active", "&[data-active=true]");
    },
  ],
};

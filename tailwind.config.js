// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#134e4a',
        secondary: '#F97316',
        accent: '#2563EB',
        background: '#F3F4F6',
        text: '#111827',
        gray: '#6B7280',
        lightGray: '#D1D5DB',
      },
    },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font for readability
      },
      spacing: {
        '1/2': '50%',     // For responsive layout adjustments
        'full': '100%',
        '15': '1.4rem',
      },
    },
  plugins: [],
};


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
        sans: ['Inter', 'sans-serif'], 
      },
    },
  plugins: [],
};

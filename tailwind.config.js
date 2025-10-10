/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2B92F3',
          light: '#5BB4FF',
          dark: '#1A6FCC',
        }
      },
    },
  },
}
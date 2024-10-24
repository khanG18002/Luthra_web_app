/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1f1f1f', // Add your custom color here
        'Light-Gray': '#ededed', // light Gray
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
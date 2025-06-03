/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
    extend: {},
  },
  plugins: [],
}


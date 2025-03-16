/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d47a1', // Dark blue
        secondary: '#e0f2f7', // Light blue
        neutral: '#f9fafb', // White
        dark: '#1e293b', // Dark gray/black
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

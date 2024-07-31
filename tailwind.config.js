/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors for dark mode
        dark: {
          // Example dark mode colors
          bg: '#1A202C',
          text: '#E2E8F0',
          accent: '#38B2AC',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode variants
  plugins: [],
}

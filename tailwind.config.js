/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF', // User's primary color
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717', // User's background color
        surface: '#262626', // User's surface color
        text: '#FFFFFF', // User's text color
        textSecondary: '#A3A3A3', // User's secondary text color
        border: '#2F2F2F', // User's border color
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      borderRadius: {
        '2xl': '16px', // Applying user's rounded feature
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using a modern sans-serif font
      },
    },
  },
  plugins: [],
}

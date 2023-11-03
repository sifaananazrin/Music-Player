/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'music-notes': 'your-color-code-here', // Replace with the desired color
      },
    },
  },
  plugins: [],
}


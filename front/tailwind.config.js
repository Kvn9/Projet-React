/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
      "primary": "#3861b0",
      "secondary": "#059669",
    },
  },
  plugins: [require("daisyui")],
}


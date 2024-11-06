/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/sfondo_san_martino.webp')",
        "sunset-pattern": "url('/images/sfondo_2.webp')",
      },
      backgroundPosition: {
        "center-bottom": "center bottom",
      },
      fontFamily: {
        "lora": ["lora", "serif"],
      },
    },
  },
  plugins: [],
}
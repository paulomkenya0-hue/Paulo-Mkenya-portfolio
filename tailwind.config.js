/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        accent: { DEFAULT: "#C9791E", light: "#E8A33D" },
        accent2: { DEFAULT: "#1C8A73", light: "#2FBF9F" },
        ink: "#111318",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(20,20,30,0.25)",
      },
    },
  },
  plugins: [],
};

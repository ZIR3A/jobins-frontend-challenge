/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(35, 39, 46, 1)",
        secondary: "rgba(139, 144, 154, 1)",
        tertiary: "rgba(243, 244, 248, 1)",
      },
      borderRadius: {
        sm: "6px"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(35, 39, 46, 1)",
        secondary: "rgba(139, 144, 154, 1)",
        tertiary: "rgba(243, 244, 248, 1)",
        background: "rgba(245, 245, 245, 1)",
        white: "rgba(255, 255, 255, 1)",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      fontSize: {
        sm: "12px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        xxl: "32px",
      },
    },
  },
  plugins: [],
};

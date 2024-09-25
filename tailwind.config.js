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
        blue: {
          primary: "rgba(115, 103, 240, 1)",
        },
        green: {
          primary: "rgba(40, 199, 111, 1)",
        },
        borderColor: "rgba(219, 218, 222, 1)"
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

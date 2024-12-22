/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#F07713",
        "green-theme": "#111827",
        "text-white": "#EFE0E0",
        "light-grey": "#8A898A",
      },
      keyframes: {
        oscillate: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        oscillate: "oscillate 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

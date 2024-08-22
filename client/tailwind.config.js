/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      minHeight: {
        "screen-dynamic": "calc(var(--vh) * 100)",
      },
      colors: {
        "dot-light": "#000",
        "dot-dark": "#fff",
      },
      transitionDuration: {
        2000: "2000ms", // Custom duration of 2000 milliseconds
        4000: "4000ms", // Custom duration of 4000 milliseconds
        // Add more custom durations as needed
      },
      keyframes: {
        "wave-animation": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave-animation 2.1s infinite",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

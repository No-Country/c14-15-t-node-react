/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, css}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/imgHero.jpeg')",
       
       
      },
      backgroundColor:{
        "card-pattern": "background: rgba(41, 25, 12, 0.89)",
       
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite backwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, css}",
   
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite backwards',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    }    
    },
  },
  plugins: [],
}
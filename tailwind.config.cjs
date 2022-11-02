/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/maple-leaves-blur.jpeg)",
      },
      colors: {
        primary: "#32232A",
        secondary: "#FF9121",
      },
      fontFamily: {
        logo: "Iceland, system-ui, sans-serif",
      },
      screens: {
        sm: "580px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateY(-4%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
    },
  },
  plugins: [],
};

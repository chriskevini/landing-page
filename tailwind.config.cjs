/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        "scale-y-in": {
          "0%": {
            scale: "1.0 0",
          },
          "100%": {
            scale: "1.0 1.0",
          },
        },
      },
      animation: {
        "scale-y-in": "scale-y-in 1000ms linear",
      },
    },
  },
  plugins: [],
};

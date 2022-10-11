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
    },
  },
  plugins: [],
};

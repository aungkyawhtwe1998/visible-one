/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        blue: {
          950: "#2DC4EA",
        },
        lime: {
          950: "#3AE7AB",
        },
      },
    },
  },
  plugins: [],
};

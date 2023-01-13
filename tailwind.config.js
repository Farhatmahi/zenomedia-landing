/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0CBE8C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

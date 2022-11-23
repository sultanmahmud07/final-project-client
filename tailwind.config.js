/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#023e8a",
          secondary: "#03045e",
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#FFFFFF",
         
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

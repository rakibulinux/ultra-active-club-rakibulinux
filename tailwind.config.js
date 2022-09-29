/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d36f",

          secondary: "#db9b34",

          accent: "#efe664",

          neutral: "#33243D",

          "base-100": "#443A4A",

          info: "#2D4CD7",

          success: "#1C6E67",

          warning: "#F7B945",

          error: "#EF7762",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

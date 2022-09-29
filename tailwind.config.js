/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: [
    {
      mytheme: {
        primary: "#57820d",

        secondary: "#56cc33",

        accent: "#f282af",

        neutral: "#211B32",

        "base-100": "#4C4C4D",

        info: "#6DBBE9",

        success: "#5BDCA2",

        warning: "#C47B0E",

        error: "#E75A63",
      },
    },
  ],
  plugins: [require("daisyui")],
};

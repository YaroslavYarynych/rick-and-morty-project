/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",

        md: "767px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1440px",
      },
      colors: {
        defaultWhiteColor: "#fff",
        primaryOrange: "#FFA500",
        secondaryOrange: "#FFDAB9",
        hoverColor: "#cbfdf9",
        dropdownDisabled: "#a5ece6",
        defaultArrow: "rgba(20, 20, 20, 0.2)",
        hoveredArrow: "rgba(20, 20, 20, 0.5)",
        activeArrow: "#11998ea9",
      },
      spacing: {
        dropdown: "50px",
      },
      boxShadow: {
        customForDropdown: "0px 4px 16px -2px #00000029",
      },
      margin: {
        auto: "25px auto",
      },
      height: {
        custom: "4.5rem",
      },
    },
  },
  plugins: [],
};

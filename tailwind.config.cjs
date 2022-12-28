// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Roboto"', '"Open Sans"'],
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1140px",
          "2xl": "1250px",
        },
      },
      colors: {
        neutral: {
          200: "#eeeeee",
        },
        blue: {
          400: "#3476b9",
          500: "#1b408d"
        },
        emerald: {
          500: "#0cb4ce",
          600: "#54a499",
          700: "#44877e"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

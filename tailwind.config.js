/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#240048",
        gray: {
          "100": "#242424",
          "200": "rgba(255, 255, 255, 0.3)",
          "300": "rgba(255, 255, 255, 0.4)",
        },
        blueviolet: "#8b1ef8",
        black: "#000",
        darkviolet: "#b319e9",
        darkorchid: "#d251ff",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "59xl": "78px",
      "43xl": "62px",
      "28xl": "47px",
      "13xl": "32px",
      "7xl": "26px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

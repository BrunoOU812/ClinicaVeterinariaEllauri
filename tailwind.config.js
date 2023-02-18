/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins"],
      serif: ["Suez one"],
    },

    colors: {
      magenta: "#E01BA5",
      pinkwhite: "#FFEDFA",
      whatsapp: "#1BD741",
      inactive: "#BDBDBD",
      blackish: "#2A3535",
      whiteish: "#EDEDED",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
  },
  plugins: [],
};

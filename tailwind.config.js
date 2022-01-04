module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FBEB58",
        secondary: "#545B60",
        dark: "#302C2C",
        "semi-dark": "#111019",
        "extra-dark": "#0C0B12",
        "off-white": "#F3F3FD",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};

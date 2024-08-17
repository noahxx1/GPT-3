export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "coral-red": "#FF4820",
        "light-blue": "#81AFDD",
        "light-orange": "#FF8A71",
        "light-cyan": "#71E5FF",
        "green-blue": "#13DED2",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundColor: {
        "dark-blue": "#040C18",
        "footer-blue": "#031B34",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

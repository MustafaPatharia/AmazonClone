module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          alice: "#EEF3F9",
          iris: '#00A8E1',
          midnight: '#232f3e',
          DEFAULT: "#141B24",
        },
        amazon_yellow:{
          light: "#FFB700",
          DEFAULT:"#FF9900",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

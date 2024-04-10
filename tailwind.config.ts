import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      colors: {
        primary: {
          50: "#F4F0F6",
          100: "#E8E0EC",
          200: "#D0BDD6",
          300: "#B89AC0",
          400: "#7F54A1",
          500: "#3B115D",
          600: "#350F54",
          700: "#250A3B",
          800: "#1B072D",
          900: "#12041F",
        },
        secondary: {
          50: "#FDF4F3",
          100: "#FBE9E7",
          200: "#F7C7C0",
          300: "#F3A59A",
          400: "#EA5E4D",
          500: "#E11600",
          600: "#CC3729",
          700: "#A82C20",
          800: "#822218",
          900: "#5C1710",
        },
        orange: {
          500: "#f96358",
        },
        gray: {
          100: "#e6e8e6",
        },
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      screen: {
        screen320: "320px",
      },
    },
  },
};

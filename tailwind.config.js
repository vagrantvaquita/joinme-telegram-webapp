/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: {
          900: "#9e0049",
          800: "#c3004c",
          700: "#d7004e",
          600: "#ec0051",
          500: "#fd0052",
          400: "#ff186d", // Normal
          300: "#ff5288",
          200: "#ff88aa",
          100: "#ffb8cc",
          50: "#ffe3eb"
        },
        blue: {
          900: "#0000b6",
          800: "#031dc7",
          700: "#172cd2",
          600: "#2538de", // Normal
          500: "#2a41ea",
          400: "#5260ef",
          300: "#747ef3",
          200: "#9fa3f6",
          100: "#c6c7f9",
          50: "#e9e9fd"
        },
      },
    },
  },
  plugins: [],
}


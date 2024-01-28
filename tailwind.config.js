/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        textShadow: {
          sm: "0 1px 2px var(--tw-shadow-color)",
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: "0 8px 16px var(--tw-shadow-color)",
        },
        primary_blue: "#78A9B0",
        secondary_pink: "#F3EBFF",
        accent_yellow: "#F6E688",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

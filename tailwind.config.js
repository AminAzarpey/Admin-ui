/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        theme: {
          750: "var(--bg-theme-750)",
          350: "var(--bg-theme-350)",
          DEFAULT: "var(--bg-theme)",
        },
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        theme: "var(--bg-theme)",
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};

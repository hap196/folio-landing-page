/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        folioBlue: "#008CA5",
      },
      animation: {
        flyInFromLeft: 'flyInFromLeft 1s ease-out forwards',
        flyInFromBottom: 'flyInFromBottom 1s ease-out forwards',
        flyInFromRight: 'flyInFromRight 1s ease-out forwards',
        flyInFromBottomLeft: 'flyInFromBottomLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

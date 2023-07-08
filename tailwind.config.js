/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-black": "#0D0D0D",
        "app-orange": "#FF6B00",
        "app-orange-light": "#FFCEAA",
        "app-orange-thick": "#FF7D20",
        "app-white": "#FFF3EB",
        "app-white-500": "#FFFBF8",
        "app-sky": "#29A5FF",
        "app-green": "#0C9700",
        "app-red": "#CE2E1C",
        "app-red-dark": "#D53838",
        "app-dark-light": "#212427",
      },
    },
  },
  plugins: [],
};

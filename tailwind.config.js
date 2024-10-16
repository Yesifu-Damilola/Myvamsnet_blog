/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading_lg: "3rem",
        heading_md: "2rem",
      },
      fontfamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-color-1": "#FFA500",
        "primary-color-2": "#007FFF",
        "red-color": "#FF4500",
        "black": "#1A1B1D",
        "plate-black": "#19222B",

        "light-black": "#3D434F",
        "very-light-black": "#37404A",
        "dark-gray": "#6A6868",
        "light-gray": "#D9D9D9",
        "light-white": "#F9FAFB",
      },
      lineHeight: {
        heading1: "3.875rem",
        heading2: "2rem",
        heading3: "2rem",
        heading4: "2.25rem",
        heading5: "2.125rem",
        heading6: "1.75rem",
        heading7: "1.625rem",
      },
    },
  },
  plugins: [],
};

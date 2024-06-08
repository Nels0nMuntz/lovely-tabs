const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xxs: "375px",
        xs: "390px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1024px",
        "2xl": "1200px",
        "3xl": "1600px",
      },
      colors: {
        "off-white": "var(--off-white)",
        blue: "var(--blue)",
        "blue-light": "var(--blue-light)",
        grays: "var(--grays)",
        "grays-dark": "var(--grays-dark)",
        "grays-muted": "var(--grays-muted)",
        red: "var(--red)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      width: {
        sidebar: "var(--sidebar-width)",
      },
      height: {
        header: "var(--header-height)",
      },
    },
  },
};

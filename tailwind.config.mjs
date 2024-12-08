/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      fhd: "1920px",
    },
    fontFamily: {
      sans: ["Roboto Slab", "system-ui"],
      mono: ["ui-monospace"],
    },
    extend: {
      colors: {
        contrastLight: "#fefae0",
        contrastDark: "#283618",
        primary: {
          light: "#F5B369",
          DEFAULT: "#F09E00",
          dark: "#CF7C00",
        },
        secondary: {
          light: "#FF6433",
          DEFAULT: "#F03800",
          dark: "#B42B00",
        },
        background: {
          light: "#FEFAE0",
          DEFAULT: "#567139",
          dark: "#283618",
          site: "#1A2211",
        },
      },
    },
  },
  plugins: [],
};

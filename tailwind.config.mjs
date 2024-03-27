import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-tint": "#F288B2",
        primary: "#F26A8D",
        secondary: "#1f2937",
        "accent-hue": "#97E5EF",
        "accent-white": "#F0EFF4",
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      Kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
      Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      shimmer: {
        "0%": { backgroundPosition: "0 0" },
        "100%": { backgroundPosition: "0 100%" },
      },
    },
  },
  daisyui: {
    themes: [
      {
        personal: {
          "primary-tint": "#F288B2",
          primary: "#F26A8D",
          secondary: "#1f2937",
          "accent-hue": "#97E5EF",
          "accent-white": "#F0EFF4",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("tailwind-gradient-mask-image"),
    require("@pyncz/tailwind-mask-image"),
  ],
};

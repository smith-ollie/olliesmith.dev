/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
    require("tailwind-gradient-mask-image"),
    require("@pyncz/tailwind-mask-image"),
    require("@tailwindcss/container-queries"),
  ],
};

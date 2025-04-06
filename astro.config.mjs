import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://olliesmith.dev",
  integrations: [react({ experimentalReactChildren: true }), mdx()],
  vite: { plugins: [tailwindcss()] },
});

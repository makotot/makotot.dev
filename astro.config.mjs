import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  site: "https://makotot.dev",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      configFile: "./tailwind.config.ts",
    }),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
})

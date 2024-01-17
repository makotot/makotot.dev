import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

const config = {
  content: ["./src/**/*.{astro,,md,mdx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["winter"],
  },
} satisfies Config

export default config

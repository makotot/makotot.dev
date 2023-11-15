import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["forest", "emerald"],
  },
} satisfies Config

export default config

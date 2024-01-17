/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  semi: false,

  // Ref: https://github.com/withastro/prettier-plugin-astro/issues/388
  // embeddedLanguageFormatting: "off",

  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}

export default config

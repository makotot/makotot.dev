import { defineConfig } from '@pandacss/dev';
import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
  presets: [
    typographyPreset(),
    '@pandacss/preset-base',
    '@pandacss/preset-panda',
  ],

  strictPropertyValues: true,
  strictTokens: true,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  //
  // `content/posts/*.mdx` was dropped: no post uses panda's style functions
  // (css/cva/sva) directly, so it was never contributing extracted styles,
  // and panda v2's parser now warns on MDX frontmatter it can't parse.
  include: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.stories.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: {
    'html, body': {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    },
  },

  utilities: {
    extend: {
      prose: {
        className: 'prose',
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});

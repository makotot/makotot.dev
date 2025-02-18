import { defineConfig } from '@pandacss/dev';
import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
  presets: [typographyPreset(), '@pandacss/dev/presets'],

  strictPropertyValues: true,
  strictTokens: true,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './content/posts/*.mdx'],

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

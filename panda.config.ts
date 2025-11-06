import { defineConfig } from '@pandacss/dev';
import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
  presets: [typographyPreset(), '@pandacss/dev/presets'],

  strictPropertyValues: true,
  strictTokens: true,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './content/posts/*.mdx',
    './src/**/*.stories.{js,jsx,ts,tsx}',
  ],

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

    // For highlighting code blocks inside prose <START>
    '.prose pre': {
      // Ensure preserved newlines don't create extra line boxes
      lineHeight: '0 !important',
    },
    '.prose pre > code': {
      display: 'block',
    },
    '.prose pre > code .line': {
      display: 'block',
      marginBlock: '0',
      paddingBlock: '0',

      // Restore readable line height for actual code lines
      lineHeight: '1.6',
    },
    '.prose pre > code .line.highlighted': {
      // subtle yellow-ish highlight; adjust as desired
      background: 'rgba(255, 213, 0, 0.14)',
    },
    // For highlighting code blocks inside prose <END>
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

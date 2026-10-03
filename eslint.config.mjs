import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import panda from '@pandacss/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';

// Panda CSS's recommended config is now an async factory that preloads the
// Panda project (config load + compiler) so rule visitors run synchronously.
const pandaRecommended = await panda.configs.recommended({
  configPath: './panda.config.ts',
});

const eslintConfig = defineConfig([
  // Next.js base + TypeScript setup (flat config array)
  ...nextVitals,

  // Panda CSS rules
  { ...pandaRecommended, name: 'panda/recommended' },

  // Storybook flat recommended config
  ...storybook.configs['flat/recommended'],

  // Vitest flat recommended config
  vitest.configs.recommended,

  // Disable Prettier-conflicting rules
  prettier,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'styled-system/**',
    'next-env.d.ts',
    'storybook-static/**',
    'coverage/**',
  ]),

  // Project-specific rules
  {
    rules: {
      'func-style': ['error', 'declaration'],
    },
  },

  // Turn off ESLint rules already covered by oxlint, so ESLint only
  // checks what oxlint can't (e.g. eslint-plugin-storybook rules).
  // Must stay last so it overrides everything above.
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
]);

export default eslintConfig;

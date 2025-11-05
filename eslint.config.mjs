import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import panda from '@pandacss/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';

const eslintConfig = defineConfig([
  // Next.js base + TypeScript setup (flat config array)
  ...nextVitals,

  // Panda CSS rules (convert legacy recommended to flat by injecting plugin + rules)
  {
    name: 'panda/recommended',
    plugins: { '@pandacss': panda },
    rules: panda.configs.recommended.rules,
  },

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
  ]),

  // Project-specific rules
  {
    rules: {
      'func-style': ['error', 'declaration'],
    },
  },
]);

export default eslintConfig;

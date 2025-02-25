import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ['node_modules', '.next', 'styled-system'],
    extends: [
      'plugin:@pandacss/recommended',
      'plugin:storybook/recommended',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
    ],
    rules: {
      'func-style': ['error', 'declaration'],
    },
  }),
];

export default eslintConfig;

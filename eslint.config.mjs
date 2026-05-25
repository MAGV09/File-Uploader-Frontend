import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // change to globals.vitest if you use Vitest
      },
    },
  },
  {
    files: ['webpack.*.js', 'scripts/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  eslintConfigPrettier,
]);

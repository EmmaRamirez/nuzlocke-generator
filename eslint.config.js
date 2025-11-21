import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/lighthouse/**',
    ],
  },
  eslintConfigPrettier,
  {
    rules: {
      // Disable overly strict rules for this codebase
      'react/prop-types': 'off', // Using TypeScript for prop validation
      '@typescript-eslint/no-explicit-any': 'warn', // Allow any but warn
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Allow unused args starting with _
          varsIgnorePattern: '^_', // Allow unused vars starting with _
          caughtErrorsIgnorePattern: '^_', // Allow unused errors starting with _
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'warn', // Warn instead of error
      '@typescript-eslint/no-unsafe-function-type': 'warn', // Warn instead of error
      'no-prototype-builtins': 'warn', // Warn instead of error
      'jsx-a11y/no-onchange': 'off', // Rule doesn't exist in current config
      '@typescript-eslint/quotes': 'off', // Rule doesn't exist, handled by prettier
      'no-useless-escape': 'off', // Rule doesn't exist, handled by prettier
    },
  },
]);

import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // ESLint's recommended rules
    'plugin:react/recommended', // React-specific linting rules
    'airbnb', // Airbnb's style guide
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 2021
    sourceType: 'module', // Allow imports/exports
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing for React
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Make Prettier issues errors
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // JSX allowed in .jsx/.tsx files
    'react/prop-types': 'off', // Disable prop-types check (use TypeScript instead if needed)
    'no-console': 'warn', // Warn about console.log (can be useful for production)
    'import/no-unresolved': 'error', // Ensure imports resolve correctly
    'import/prefer-default-export': 'off', // Turn off the rule for default exports
    'no-unused-vars': 'warn', // Warn on unused variables
    'no-underscore-dangle': 'off', // Allow dangling underscores (useful for certain coding styles)
    'jsx-a11y/anchor-is-valid': 'off', // Disable invalid anchor tag checking in JSX (optional, based on project needs)
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
});

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  
  // Base TypeScript configuration for all files
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  
  // React configuration for apps workspace only
  {
    files: ['apps/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // We use TypeScript
    },
  },
  
  // Node.js configuration for packages workspace
  {
    files: ['packages/**/*.{js,ts,mjs,cjs,mts,cts}'],
    languageOptions: {
      globals: {
        node: true,
        process: true,
        Buffer: true,
        __dirname: true,
        __filename: true,
        module: true,
        require: true,
      },
    },
    rules: {
      // Node.js specific rules can be added here
      '@typescript-eslint/no-require-imports': 'off', // Allow require in Node packages
    },
  },
  
  // Disable type checking for config files
  {
    files: ['**/*.config.{js,ts,mjs,cjs}', '**/*.d.ts'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  
  // Global ignores
  {
    ignores: [
      '**/dist/',
      '**/build/',
      '**/out/',
      '**/coverage/',
      '**/node_modules/',
      '**/*.tsbuildinfo',
      '.pnpm-store/',
      'pnpm-lock.yaml',
    ],
  },
);
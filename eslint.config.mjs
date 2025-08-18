import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import stylistic from '@stylistic/eslint-plugin';

const stylisticRules = {
  // Indentation and spacing
  '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
  '@stylistic/no-tabs': 'error',
  '@stylistic/max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
  
  // Semicolons
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': 'error',
  '@stylistic/semi-style': 'error',
  
  // Quotes
  '@stylistic/quotes': ['error', 'double', { avoidEscape: true, allowTemplateLiterals: 'always' }],
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  
  // Commas
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  
  // Spacing
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/block-spacing': 'error',
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/key-spacing': 'error',
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
  ],
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  '@stylistic/space-in-parens': 'error',
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/spaced-comment': ['error', 'always', { markers: ['/'] }],
  
  // JSX/React specific
  '@stylistic/jsx-closing-bracket-location': 'error',
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  '@stylistic/jsx-curly-spacing': ['error', { when: 'never' }],
  '@stylistic/jsx-equals-spacing': 'error',
  '@stylistic/jsx-indent-props': ['error', 2],
  '@stylistic/jsx-props-no-multi-spaces': 'error',
  '@stylistic/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  '@stylistic/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  }],
  
  // TypeScript specific
  '@stylistic/member-delimiter-style': ['error', {
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: false },
  }],
  '@stylistic/type-annotation-spacing': 'error',
};

export default tseslint.config(
// Stylistic formatting rules for all source files
{
  files: ['packages/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}', 'apps/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}'],
  plugins: {
    '@stylistic': stylistic,
  },
  rules: stylisticRules,
}, // Base JavaScript configuration for packages and apps only
{
  files: ['packages/**/*.{js,mjs,cjs,jsx}', 'apps/**/*.{js,mjs,cjs,jsx}'],
  ...js.configs.recommended,
}, // TypeScript configuration with type checking for packages and apps only
{
  files: ['packages/**/*.{ts,tsx,mts,cts}', 'apps/**/*.{ts,tsx,mts,cts}'],
  extends: [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
}, // React configuration for apps workspace only
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
}, // Node.js configuration for packages workspace
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
}, // Disable type checking for config files and Storybook files
{
  files: ['**/*.config.{js,ts,mjs,cjs}', '**/*.d.ts', '**/.storybook/**/*.{js,ts,jsx,tsx}', '**/*.stories.{js,ts,jsx,tsx}'],
  extends: [tseslint.configs.disableTypeChecked],
}, // Global ignores
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
    '.sst/',
    '**/storybook-static/',
    '**/.next/',
    '**/.turbo/',
    '**/.vercel/',
    '**/public/',
    '**/.DS_Store',
    '**/*.log',
    '**/*.min.js',
    '**/*.min.css',
  ],
});
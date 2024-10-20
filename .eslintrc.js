module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
  },

  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}

// module.exports = {
//   root: true,
//   extends: [
//     'plugin:@next/next/recommended', // Next.js recommended rules
//     'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors
//     '@payloadcms', // Payload CMS rules (assuming you are using Payload CMS)
//   ],
//   ignorePatterns: ['**/payload-types.ts'], // Ignoring generated types files
//   plugins: [
//     'simple-import-sort', // Sorting imports plugin
//     'prettier', // Prettier plugin for formatting
//   ],
//   parserOptions: {
//     ecmaVersion: 2020, // Latest ECMAScript features
//     sourceType: 'module', // Use ES modules
//     ecmaFeatures: {
//       jsx: true, // Enable JSX syntax
//     },
//   },
//   rules: {
//     'prettier/prettier': ['error', { singleQuote: true, printWidth: 80 }], // Prettier config
//     'no-console': 'warn', // Warn on console logs
//     'simple-import-sort/imports': 'error', // Enforces sorted imports
//     'simple-import-sort/exports': 'error', // Enforces sorted exports
//     '@next/next/no-img-element': 'off', // Allow use of <img> instead of <Image> component
//     'react/react-in-jsx-scope': 'off', // Not needed in Next.js
//     'function-paren-newline': ['error', 'consistent'],
//   },
// }

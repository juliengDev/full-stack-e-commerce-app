module.exports = {
  root: true,
  extends: [],
  rules: {},
  ignorePatterns: ['**/*'], // Ignore tout le projet
}

// module.exports = {
//   root: true,
//   extends: ['eslint:recommended', 'plugin:@next/next/recommended'],
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   rules: {
//     // Désactiver toutes les règles ESLint qui causent des erreurs
//     'prettier/prettier': 'off',
//     'no-console': 'off',
//     'simple-import-sort/imports': 'off',
//     'simple-import-sort/exports': 'off',
//     '@next/next/no-img-element': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'function-paren-newline': 'off',
//     'no-unused-vars': 'off',
//     'no-undef': 'off',
//     '@next/next/no-html-link-for-pages': 'off',
//     'no-empty': 'off', // Désactive l'erreur pour les blocs vides
//     'no-debugger': 'off', // Permet l'utilisation de 'debugger'
//     'no-redeclare': 'off', // Désactive l'erreur pour les redeclarations de variables
//     'no-irregular-whitespace': 'off', // Désactive l'erreur pour les espaces blancs irréguliers
//     'no-case-declarations': 'off', // Permet les déclarations dans des cases de switch
//     'no-unreachable': 'off', // Permet le code après un return, throw, etc.
//     'no-constant-condition': 'off', // Permet les conditions constantes dans des boucles
//     'no-fallthrough': 'off', // Désactive l'erreur pour les fallthrough dans les switch
//     'no-empty-pattern': 'off', // Désactive l'erreur pour les motifs vides
//   },
//   ignorePatterns: ['**/payload-types.ts', 'dist/**/*', '.next/**/*'],
// }

// module.exports = {
//   root: true,
//   extends: ['plugin:@next/next/recommended', '@payloadcms'],
//   ignorePatterns: ['**/payload-types.ts'],
//   plugins: ['prettier'],
//   rules: {
//     'prettier/prettier': 'off',
//     'no-console': 'off',
//   },

//   plugins: ['simple-import-sort'],
//   rules: {
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',
//   },
// }

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

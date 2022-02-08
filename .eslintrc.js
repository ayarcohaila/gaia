module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
      modules: true
    },
    babelOptions: {
      configFile: './babelrc.js'
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true
  },
  plugins: ['prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
    'plugin:cypress/recommended',
    'prettier'
  ],
  globals: {
    JSX: true // Allows the use of the JSX namespace
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], // Use our .prettierrc file as source
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'off', // Allow autoFocus on material elements
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '"jsx-a11y/no-autofocus"': 'off', // Allow autoFocus on material elements
    'cypress/no-unnecessary-waiting': 'off',
    'no-unsafe-optional-chaining': 'off'
  }
};

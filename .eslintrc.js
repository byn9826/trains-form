module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'import/no-extraneous-dependencies': 0,
    'no-alert': 0
  },
};

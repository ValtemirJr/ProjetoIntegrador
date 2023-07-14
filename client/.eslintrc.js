module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};

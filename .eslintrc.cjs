module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: ['./tsconfig.json'],
  //   sourceType: 'module'
  // },
  rules: {
    semi: ['error', 'always'],
    'no-extra-boolean-cast': 'off',
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
    quotes: ['error', 'single'],
    'object-curly-spacing': [1, 'always'],
    'no-undef': 'off',
    'one-var': 'off',
    'no-unused-vars': 'off',
    camelcase: 'off',
    'no-console': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
  }
};

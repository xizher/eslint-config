module.exports = {
  extends: [
    '@nhz/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
  },
  'rules': {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  }
}

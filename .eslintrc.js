module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/script-setup-uses-vars': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'max-len': ['error', { code: 200 }],
    'no-console': 0,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        vue: 'always',
        json: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.vue'],
    },
  ],
};

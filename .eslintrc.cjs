module.exports = {
  root: true,
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['nuxt', 'vue', 'import', 'standard', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        trailingComma: 'all',
        endOfLine: 'crlf',
      },
    ],
  },
}

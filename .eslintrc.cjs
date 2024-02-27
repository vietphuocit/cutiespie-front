module.exports = {
  root: true,
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue', 'nuxt', 'import'],
  rules: {
    'vue/multi-word-component-names': 0,
    'import/no-named-as-default': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
}

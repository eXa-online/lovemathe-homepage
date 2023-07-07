module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    
    // spacebar as normal works for @click
    'vuejs-accessibility/click-events-have-key-events':'off',
    
    // more an option for being "future-proof" with possible new html tags
    'vue/multi-word-component-names': 'off',

    // requires additional work to be used flawless in the nuxt3/vue3 context
    'import/extensions':'off',
  },
};

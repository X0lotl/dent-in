module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Add this line to include the Vue 3 recommended rules
  ],
  rules: {
    // Add your existing rules here

    // Vue-specific rules
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always',
    }],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
  },
};

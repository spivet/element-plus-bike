module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'alloy',
    'alloy/vue',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/no-v-model-argument': 0
  },
};

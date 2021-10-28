module.exports = {
  'parser': 'vue-eslint-parser',
  extends: [
    '@nhz/eslint-config-basic',
    'plugin:vue/vue3-recommended',
    'plugin:vue/base', // to fix "Parsing error: Unexpected token <"
  ],
  'plugins': [
    'vue'
  ],
  'globals': {
    'defineProps': true,
    'defineEmits': true,
    'defineExpose': true,
  },
}

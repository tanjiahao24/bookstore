// module.exports = {
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "es2020": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:vue/essential",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parserOptions": {
//         "ecmaVersion": 12,
//         "parser": "@typescript-eslint/parser"
//     },
//     "plugins": [
//         "vue",
//         "@typescript-eslint"
//     ],
//     "rules": {
//         //  生产环境不允许控制台输出，开发允许允许控制台输出。
//         'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//         'space-before-function-paren': 0, // 不允许函数的()前有空格
//         'vue/no-multiple-template-root': 0,
//         '@typescript-eslint/no-empty-function': 0, //允许出现空的函数
//         '@typescript-eslint/no-explicit-any': [2], // 允许使用any
//         '@typescript-eslint/no-var-requires': 0, // 项目中允许使用 require()语法。
//         semi: 0, // 关闭语句结尾分号
//         quotes: [2, 'single'], //使用单引号
//         'prefer-const': 2, // 开启不变的变量一定要使用const
//         '@typescript-eslint/no-unused-vars': 0, // 允许出现未使用过的变量
//         '@typescript-eslint/no-inferrable-types': 0, //  允许变量后面添加类型
//         '@typescript-eslint/no-non-null-assertion': 0,
//     }
// };
module.exports = {
  root: true,
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: ['plugin:@typescript-eslint/recommended'],

  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-var-requires': 0,
    semi: 0,
    quotes: [2, 'single'],
    'prefer-const': 2,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
}

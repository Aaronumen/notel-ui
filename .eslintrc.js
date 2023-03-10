module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"], //允许ts定义any
    "vue/multi-word-component-names": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"] //允许非空断言
  }
}

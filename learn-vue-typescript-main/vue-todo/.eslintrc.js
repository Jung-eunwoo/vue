module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": "off", // Unexpected any. Specify a different type 문구 제거
    "@typescript-eslint/explicit-module-boundary-types": "off", // React, { ReactElement } from "react" 설정 안함
    "@typescript-eslint/no-unused-vars": "off", // 사용하지 않는 프로퍼티 경고 문구 제거
  },
};

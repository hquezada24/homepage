import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  defineConfig([
    {
      files: ["**/*.{js,mjs,cjs}"],
      languageOptions: { globals: { ...globals.browser, ...globals.node } },
      extends: ["js/recommended", "prettier"],
      rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
      },
    },
  ]),
  eslintConfigPrettier,
];

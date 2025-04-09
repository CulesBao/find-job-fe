import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginReactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "unused-imports": unusedImports,
    },
    extends: [
      "js/recommended",
      pluginReact.configs.flat.recommended,
      eslintConfigPrettier,
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      "prefer-const": "warn",
      "no-var": "error",

      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);

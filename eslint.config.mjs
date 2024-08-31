import eslint from "@eslint/js";
import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

const config = [
  eslint.configs.all,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettier,
  jsdoc.configs["flat/recommended-error"],

  {
    files: ["src/**/*", "test/**/*", "examples/**/*"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    plugins: {
      jsdoc,
    },
    rules: {
      "func-style": "off",
      "id-length": "off",
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            ClassDeclaration: true,
            FunctionDeclaration: true,
            MethodDefinition: true,
          },
        },
      ],
      "max-classes-per-file": "off",
      "max-lines-per-function": "off",
      "max-params": "off",
      "max-statements": "off",
      "no-console": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-use-before-define": "off",
      "one-var": "off",
      "prefer-template": "off",
      "prettier/prettier": "error",
      "sort-imports": "off",
      "sort-keys": "off",
    },
  },
  {
    ignores: [
      ".github",
      ".vscode",
      "coverage",
      "dist",
      "MAVSDK-Proto",
      "node_modules",
      "protobuf-gen",
      "examples",
      "vitest.config.js",
    ],
  },
];

export default config;

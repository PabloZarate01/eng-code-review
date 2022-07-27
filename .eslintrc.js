module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },

  plugins: ["@typescript-eslint", "prettier", "jest"],

  rules: {
    "no-console": 1,
    "no-multiple-empty-lines": [
      2,
      {
        max: 2,
        maxEOF: 1
      }
    ],
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    "object-curly-spacing": ["warn", "always"],
    "no-mixed-operators": 0,
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn"],
    "no-debugger": 0,
    "no-const-assign": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "constructor-super": "warn",
    "valid-typeof": "error",
    semi: ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    "brace-style": ["warn", "1tbs"],
    "key-spacing": ["warn", { beforeColon: false }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "space-before-blocks": ["warn"],
    "prettier/prettier": 1
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    },
    {
      files: ["**/*.ts"],
      rules: {
        "no-undef": "off"
      }
    }
  ],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
};

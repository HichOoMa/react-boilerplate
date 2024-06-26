module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  ignorePatterns: ["dist", "coverage", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/no-unescaped-entities": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": ["off"],
    "react/function-component-definition": ["off"],
    "arrow-body-style": ["off"],
    "react/prop-types": ["off"],
    "react/no-unused-prop-types": ["off"],
    "react/require-default-props": ["off"],
    "jsx-a11y/no-autofocus": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"],
    "no-underscore-dangle": ["off"],
    "no-restricted-exports": ["off"],
    "no-console": ["warn", { allow: ["error"] }],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "no-unused-vars": "warn",
  },
};
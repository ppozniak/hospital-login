module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:jsx-a11y/strict",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest", "jsx-a11y"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
  },
};

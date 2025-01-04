module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    // Remove sourceType: "module" if using CommonJS
  },
  rules: {
    "no-undef": "error",
    "semi": ["error", "always"],
  },
};

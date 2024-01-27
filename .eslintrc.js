module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  overrides: [{
    "files": ["*.ts"],
    "rules": {
      "no-unused-vars": "off"}
    }],
  rules: {
    "indent": ["error", 4],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, minProperties: 3 },
      "ObjectPattern": { "multiline": false, minProperties: 5 },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
  }],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }],
  "camelcase": ["error", {
    "ignoreImports": true
  }],
  "react/display-name": "off",
  "no-undef": "off", // TS has its own checks
  // note you must disable the base rule as it can report incorrect errors
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": ["error"]
  },
}
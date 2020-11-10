module.exports = {
  extends: [
    "airbnb"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx", ".d.ts", ".svg", ".json"],
        "paths": ["."]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  rules: {
    "import/extensions": ["error", "never", { "svg": "always", "json": "always" }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/prefer-default-export": "off",
    "quotes": ["error", "double"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": false }],
    "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
  }
};

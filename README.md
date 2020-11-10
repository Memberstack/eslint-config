# ESlint Config
A set of common rules for all TypeScript repositories.

Note that this ruleset will need to be extended depending on your project and environment.

Ex. Extending for React

```
{
  "env": {
    "browser": true
  },
  "extends": [
    "@memberstack/eslint-config",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/state-in-constructor": ["warn", "never"]
  }
}
```
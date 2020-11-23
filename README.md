# ESlint Config
A set of common rules for all TypeScript repositories. This module also comes with Prettier to assist with code formatting.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation
This project can be installed as a dependency through GitHub:

```
yarn add -D @memberstack/eslint-config
```

Note that this ruleset is environment agnostic. It will need to be extended depending on your project and environment.

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

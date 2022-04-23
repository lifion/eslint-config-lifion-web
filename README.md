# eslint-config-lifion-web

[![npm version](https://badge.fury.io/js/eslint-config-lifion-web.svg)](http://badge.fury.io/js/eslint-config-lifion-web) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)

This package provides Lifion's base JS `.eslintrc` for the Web as an extensible shared config.

## Usage

Install the module and its peer dependencies:

```sh
npm install eslint-config-lifion-web eslint@8 prettier@2 -D
```

Make sure ESLint uses this module by adding "extends" to your `.eslintrc` file:

```json
{
  "extends": "lifion-web"
}
```

Configure Prettier by adding this to your `.prettierrc` file:

```json
{
  "endOfLine": "auto",
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none"
}
```

You might want to add these npm scripts to your `package.json` file:

```json
{
  "scripts": {
    "eslint": "eslint . --ext .js,.json,.md,.ts --ignore-pattern='!.*.*'",
    "prettier": "prettier --write '**/*.{hbs,js,json,md,ts}' '.*rc' '!dist/**/*.js'"
  }
}
```

## License

[Apache-2.0](LICENSE)

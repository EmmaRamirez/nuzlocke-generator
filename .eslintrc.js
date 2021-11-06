/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "prettier",
        "plugin:jsx-a11y/recommended",
        "plugin:jest/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "jsx-a11y",
        "jest"
    ],
    "rules": {
        // "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "warn",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "camelcase": "error",
        "constructor-super": "error",
        "default-case": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        // "import/no-default-export": "error",
        "import/order": "off",
        "no-caller": "error",
        "no-eval": "error",
        "no-new-wrappers": "error",
        "@typescript-eslint/no-redeclare": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
    }
};

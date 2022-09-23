# Ensures length is properly typed (no-lenght)

This rule was created to prevent mistyping the length property.

> This project is a fork of https://www.npmjs.com/package/eslint-plugin-no-lenght.  
Original author: @enapupe (Iacami Gevaerd)


## Rule Details

Examples of **incorrect** code for this rule:

```js

someObj.lenght

```

Examples of **correct** code for this rule:

```js

someObj.length

```

## How to use this plugin

**Note:** This plugin requires `eslint` in your project.

1. Install this plugin: `npm install @didaquis/eslint-plugin-no-lenght --save-dev`

2. Add this configuration on your eslintrc file:
```
{
  "plugins": [
    "@didaquis/no-lenght"
  ],
  "rules": {
    "@didaquis/no-lenght": "error"
  }
}
```
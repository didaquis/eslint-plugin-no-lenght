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

First install this plugin: `npm i --save-dev @didaquis/eslint-plugin-no-lenght`


### .eslintrc example
```
{
  "rules": {
    "no-lenght/no-lenght": "error" // error, warn
  },
  "plugins": [
    "no-lenght"
  ]
}
```
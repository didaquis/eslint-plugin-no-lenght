# eslint-plugin-no-lenght

This plugin was created to avoid misspelling the "length" property.


## Why?

Many non-English speakers make the mistake of writing the word "lenght" when they want to write "length". This plugin allows to detect that mistake.


## Installation and Usage

1. Install the plugin using this command: `npm install @didaquis/eslint-plugin-no-lenght --save-dev`
2. Add this configuration on your eslintrc file:
```
{
  "plugins": [
    "@didaquis/no-lenght"
  ],
  "rules": {
    "@didaquis/no-lenght/no-lenght": "error"
  }
}
```

Available setting for the rule:
* `"off"` - turn the rule off.
* `"warn"` - turn the rule on as a warning (doesn’t affect exit code).
* `"error"` - turn the rule on as an error (exit code is 1 when triggered).

<br>**Note:** This plugin requires `eslint` configured in your project.


## Rule Details

Examples of **CORRECT** code for this rule:
```js
const fruits = [];

if (fruits.length) {
  // ...
}
```


Examples of **INCORRECT** code for this rule:
```js
const fruits = [];

if (fruits.lenght) { // throws an eslint error!
  // ...
}
```
```js
const size = {
	length: 200,
	width: 50
};

if (size.lenght > 100) { // throws an eslint error!
	// ...
}
```

## Credit


> This project is a refactored fork of [this project](https://www.npmjs.com/package/eslint-plugin-no-lenght).  
>  Original author: @enapupe (Iacami Gevaerd)

#  A list of pending tasks

### Resources: 
https://astexplorer.net
https://eslint.org/docs/latest/developer-guide/unit-tests

```js

// Para evitar crear objetos con una propiedad mal escrita:
ObjectExpression: (node) => {
	node.properties.forEach(property => {
		if (property.key.name === 'lenght') {
			context.report(node.property, 'Make sure to write correctly "length"');
		}
	});
}

```
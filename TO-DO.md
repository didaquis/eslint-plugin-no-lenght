#  A list of pending tasks

### Resources: 
https://astexplorer.net
https://eslint.org/docs/latest/developer-guide/unit-tests

```js

// Para evitar crear objetos con una propiedad mal escrita:
// De todas formas no es necesario esto, ya que si intentas obtener acceso a la propiedad ya saltará la otra regla.
// El plugin no es perfecto, porque incluso añadiendo esto no coloca el underline bajo la inicialización de la prop dentro de un objeto.
// Aunque en ese caso, con este añadido si que salta la regla, pese a no tener el underline.

// En definitiva, que si averiguo como hacer que se vea la underline, lo ideal sería añadir esté código como segúndo parámetro a mi regla


MemberExpression: () => {
	// ... whatever
},
ObjectExpression: (node) => {
	node.properties.forEach(property => {
		if (property.key.name === 'lenght') {
			context.report({
				node: property.key,
				message: 'Make sure to write correctly "length"',
			});
		}
	});
}

```
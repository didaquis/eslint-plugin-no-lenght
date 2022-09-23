module.exports = {
	rules: {
		'no-lenght': {
			create: (context) => ({
				MemberExpression: (node) => {
					if (node.property.name === 'lenght') {
						context.report(node.property, 'Mistyped prop length found!');
					}
				}
			})
		}
	}
};
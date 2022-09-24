module.exports = {
	meta: {
		type: 'problem',
	},
	rules: {
		'no-lenght': {
			create: (context) => ({
				MemberExpression: (node) => {
					if (node.property.name === 'lenght') {
						context.report(node.property, 'Make sure to write correctly "length"');
					}
				}
			})
		}
	}
};
module.exports = {
	testEnvironment: 'jsdom',
	snapshotSerializers: ['@emotion/jest/serializer'],
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
};

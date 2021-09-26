module.exports = {
	testEnvironment: 'node',
	testRegex: "((\\.|/*.)(spec))\\.js?$",
	moduleDirectories: [
		".",
		"src",
		"node_modules"
	],
	moduleNameMapper: {
		"^#server(.*)$": "<rootDir>/src/server",
		"^#controllers(.*)$": "<rootDir>/src/controllers/$1",
		"^#services(.*)$": "<rootDir>/src/services/$1",
		"^#shared(.*)$": "<rootDir>/src/shared/$1"
	}
}
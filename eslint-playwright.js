export const eslintPlaywrightRules = {
	rules: {
		"playwright/expect-expect": [
			"error", {
				"assertFunctionNames": [],
			},
		],
		"playwright/max-expects": [
			"error", {
				"max": 5,
			},
		],
		"playwright/max-nested-describe": [
			"error", {
				"max": 3,
			},
		],
		"playwright/no-commented-out-tests": [
			"error",
		],
		"playwright/no-conditional-expect": [
			"error",
		],
		"playwright/no-conditional-in-test": [
			"error",
		],
		"playwright/no-duplicate-hooks": [
			"error",
		],
		"playwright/no-element-handle": [
			"error",
		],
		"platwright/no-eval": [
			"error",
		],
		"playwright/no-focused-test": [
			"error",
		],
		"playwright/no-force-option": [
			"error",
		],
		"playwright/no-get-by-title": [
			"error",
		],
		"playwright/no-hooks": [
			"error", {
				"allow": [],
			},
		],
		"playwright/no-nested-step": [
			"error",
		],
		"playwright/no-networkidle": [
			"error",
		],
		"playwright/no-unsafe-references": [
			"error",
		],
		"playwright/no-unused-locators": [
			"error",
		],
		"playwright/no-useless-await": [
			"error",
		],
		"playwright/no-useless-not": [
			"error",
		],
		"playwright/no-wait-for-navigation": [
			"error",
		],
		"playwright/no-wait-for-selector": [
			"error",
		],
		"playwright/no-wait-for-timeout": [
			"error",
		],
		"playwright/prefer-comparison-matcher": [
			"error",
		],
		"playwright/prefer-equality-matcher": [
			"error",
		],
		"playwright/prefer-hooks-in-order": [
			"error",
		],
		"playwright/prefer-hooks-on-top": [
			"error",
		],
		"playwright/prefer-locator": [
			"error",
		],
		"playwright/prefer-lowercase-title": [
			"error", {
				"ignore": [],
				"allowedPrefixes": ["GET", "POST", "PUT", "PATCH", "DELETE"],
				"ignoreTopLevelDescribe": false,
			},
		],
		"playwright/refer-native-locators": [
			"error", {
				"testIdAttribute": "data-testid",
			},
		],
		"playwright/prefer-strict-equal": [
			"error",
		],
		"playwright/prefer-to-be": [
			"error",
		],
		"playwright/prefer-to-contain": [
			"error",
		],
		"playwright/prefer-to-have-count": [
			"error",
		],
		"playwright/prefer-to-have-length": [
			"error",
		],
		"playwright/prefer-web-first-assertions": [
			"error",
		],
		"playwright/require-hook": [
			"error", {
				"allowedFunctionCalls": [],
			},
		],
		"playwright/require-soft-assertions": [
			"off",
		],
		"playwright/require-to-throw-message": [
			"error",
		],
		"playwright/require-top-level-describe": [
			"error", {
				"maxTopLevelDescribes": 3,
			},
		],
		"playwright/valid-describe-callback": [
			"error",
		],
		"playwright/valid-expect-in-promise": [
			"error",
		],
		"playwright/valid-expect": [
			"error", {
				"minArgs": 1,
				"maxArgs": 2,
			},
		],
		"playwright/valid-test-tags": [
			"error", {
				"allowedTags": ["@e2e", "@regression", "@slow", "@fast"],
			},
		],
		"playwright/valid-title": [
			"error", {
				"ignoreSpaces": false,
				"ignoreTypeOfStepName": false,
				"ignoreTypeOfTestName": false,
				"ignoreTypeOfDescribeName": false,
				"disallowedWords": [],
				"mustNotMatch": {},
				"mustMatch": {},
			},
		],
	},
}

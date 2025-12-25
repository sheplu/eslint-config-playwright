import { eslintPlaywrightRules } from './eslint-playwright.js';

export const playwrightRules = [
	{
		rules: {
			...eslintPlaywrightRules.rules,
		},
	},
];

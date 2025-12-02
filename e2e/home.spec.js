/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';


test.describe('Site title', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the social section', async ({ page }) => {
		await expect(page).toHaveTitle('Abdul Ripon — Senior Software Engineer | Full Stack Developer');
	});
});

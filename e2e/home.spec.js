/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test.describe('Intro component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the profile section', async ({ page }) => {
		await expect(page.locator('.profile')).toBeVisible();
	});

	test('shows the portfolio owner name', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'Abdul Awal Ripon' })).toBeVisible();
	});

	test('shows the title', async ({ page }) => {
		await expect(page.locator('.profile .title')).toHaveText('Lead Software Engineer');
	});

	test('shows the summary', async ({ page }) => {
		await expect(page.locator('.profile .summary')).toContainText('Experienced full-stack engineer');
	});
});

test.describe('Social component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the social section', async ({ page }) => {
		await expect(page.locator('.social-icons')).toBeVisible();
	});

	test('shows exactly three social links', async ({ page }) => {
		const social = page.locator('.social-icons');
		await expect(social.getByRole('link')).toHaveCount(3);
	});

	test('includes the Email link', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute(
			'href',
			'mailto:mdabdulripon@gmail.com'
		);
	});

	test('includes the GitHub link', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
			'href',
			'https://github.com/mdabdulripon'
		);
	});
	
	test('includes the LinkedIn link', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/abdul-ripon-030483126/'
		);
	});
});

/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

const sectionLinks = [
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Education', href: '#education' },
	{ name: 'Contact', href: '#contact' },
];

test.describe('Site title', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the page title', async ({ page }) => {
		await expect(page).toHaveTitle('Abdul Ripon — Senior Software Engineer | Full Stack Developer');
	});
});

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

test.describe('Navbar component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the navbar container', async ({ page }) => {
		await expect(page.locator('nav.nav-links')).toBeVisible();
	});

	test('shows all navigation links', async ({ page }) => {
		const nav = page.locator('nav.nav-links');
		await expect(nav.getByRole('link')).toHaveCount(sectionLinks.length + 1);
	});

	for (const { name, href } of sectionLinks) {
		test(`includes ${name} link`, async ({ page }) => {
			await expect(page.getByRole('link', { name })).toHaveAttribute('href', href);
		});
	}

	test('includes Blog link', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
	});

	test('defaults About link as active', async ({ page }) => {
		const about = page.getByRole('link', { name: 'About' });
		await expect(about).toHaveClass(/active/);
	});

	test('activates Skills link when clicked', async ({ page }) => {
		const skills = page.getByRole('link', { name: 'Skills' });
		await skills.click();
		await expect(skills).toHaveClass(/active/);
	});

	test('removes active class from About after clicking Skills', async ({ page }) => {
		const about = page.getByRole('link', { name: 'About' });
		await page.getByRole('link', { name: 'Skills' }).click();
		await expect(about).not.toHaveClass(/active/);
	});

	test('navigates to blog URL', async ({ page }) => {
		await page.locator('nav.nav-links').getByRole('link', { name: 'Blog' }).click();
		await expect(page).toHaveURL(/\/blog$/);
	});

	test('shows blog heading after navigation', async ({ page }) => {
		await page.locator('nav.nav-links').getByRole('link', { name: 'Blog' }).click();
		await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
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

import { test, expect } from 'core';

test('Google search for Playwright', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Perform a search
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');

  // Assert that the title contains "Playwright"
  await page.waitForTimeout(1000); // wait for the results to load
  expect(await page.title()).toContain('Playwright');
});

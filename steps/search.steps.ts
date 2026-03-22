import { Given, When, Then } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

Given('I open the Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com');
  // Handle cookie consent popup if it appears
  const rejectButton = page.getByRole('button', { name: /afwijzen|Reject|Tout refuser/i });
  if (await rejectButton.isVisible({ timeout: 3000 })) {
    await rejectButton.click();
  }
});

When('I search for {string}', async ({ page }, searchTerm: string) => {
  await page.locator('textarea[name="q"]').fill(searchTerm);
  await page.keyboard.press('Enter');
});

Then('I should see results related to {string}', async ({ page }, term: string) => {
  await expect(page).toHaveTitle(new RegExp(term, 'i'));
});
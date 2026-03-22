import { Given, When, Then } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

interface Credentials {
    username : string;
    password : string;
}

const validUser: Credentials = {
    username : 'tomsmith',
    password: 'SuperSecretPassword!',
}

Given('I open the login page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

When('I log in as {string} with password {string}', async ({ page }, username: string, password: string) => {
  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see the secure area', async ({ page }) => {
  await expect(page.locator('.flash.success')).toBeVisible();
});
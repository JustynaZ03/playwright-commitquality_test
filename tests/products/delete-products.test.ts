import { test, expect } from '@playwright/test';

const mainPageURL = 'https://commitquality.com/';
const loginPageUrl = 'https://commitquality.com/login';
test('is delete products working', async ({ page }) => {
    await page.goto(loginPageUrl);
    const usernameInput = page.getByTestId('username-textbox');
    const passwordInput = page.getByTestId('password-textbox');
    const loginButton = page.getByRole('button', {name: 'Login'});
    await usernameInput.fill('test');
    await passwordInput.fill('test');
    await loginButton.click();
    await expect(page.getByRole('link', {name: 'Logout'})).toBeVisible();

    const row = page.locator('tr').filter({ hasText: '11' }).first();

    await row.getByRole('link', { name: 'Delete' }).click();

    await expect(page).toHaveURL(mainPageURL);

    await expect(row).toBeVisible();

});
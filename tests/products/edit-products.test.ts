import { test, expect } from '@playwright/test';

const loginPageUrl = 'https://commitquality.com/login';
const mainPageUrl = 'https://commitquality.com/';

test('is edit button working', async ({ page }) => {
  await page.goto(loginPageUrl);
    const usernameInput = page.getByTestId('username-textbox');
    const passwordInput = page.getByTestId('password-textbox');
    const loginButton = page.getByRole('button', {name: 'Login'});
    await usernameInput.fill('test');
    await passwordInput.fill('test');
    await loginButton.click();
    await expect(page.getByRole('link', {name: 'Logout'})).toBeVisible();
    const row = page.locator('tr').filter({ hasText: '11' }).first();
    await row.getByRole('link', { name: 'Edit' }).click();
    await expect(page).toHaveURL('https://commitquality.com/edit-product/11');
});

test('is edit product working', async ({ page }) => {
  await page.goto('https://commitquality.com/edit-product/11');
  const nameInput = page.getByTestId('product-textbox');
  const priceInput = page.getByTestId('price-textbox');
  const dateInput = page.getByTestId('date-stocked');
  const updateButton = page.getByRole('button', {name: 'Update'});
  await nameInput.fill('Product updated');
  await priceInput.fill('2137');
  await dateInput.fill('2026-06-10');
  await updateButton.click();

  await expect(page).toHaveURL(mainPageUrl);
  const row = page.locator('tr').filter({ hasText: 'Product updated' });
  await expect(row).toBeVisible();
});    

test('is cancel working', async ({ page }) => {
    await page.goto('https://commitquality.com/edit-product/11');
    const cancelButton = page.getByRole('link', {name: 'cancel'});
    await cancelButton.click();
  
    await expect(page).toHaveURL(mainPageUrl);
    const row = page.locator('tr').filter({ hasText: '11' }).first();
    await expect(row).toBeVisible();
  }); 

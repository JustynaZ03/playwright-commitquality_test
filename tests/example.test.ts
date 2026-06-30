import { test, expect } from '@playwright/test';
import context  from '@playwright/test'

const mainPageSite = 'https://commitquality.com/'
const addProductSite = 'https://commitquality.com/add-product'
const practiceSite = 'https://commitquality.com/practice'
const learnSite = 'https://www.youtube.com/@commitquality'
const loginSite = 'https://commitquality.com/login'

test('has title', async ({ page }) => {
  await page.goto(mainPageSite);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CommitQuality - Test Automation Demo/);
});

test('navigate to add product', async({page}) => {
    await page.goto(mainPageSite);

    await page.getByRole('link', { name: 'Add Product' }).click();
    await expect(page).toHaveURL(addProductSite);
    await expect(page.locator('h1')).toHaveText('Add Product');
});

test('navigate to practice', async({page}) => {
    await page.goto(mainPageSite);

    await page.getByRole('link', { name: 'Practice' }).click();
    await expect(page).toHaveURL(practiceSite);
});

test('navigate to learn', async({page}) => {
    await page.goto(mainPageSite);

    await page.getByRole('link', { name: 'Learn' }).click();

    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2F%40commitquality%3Fcbrd%3D1&gl=PL&m=0&pc=yt&cm=2&hl=en&src=1');
});

test('navigate to login', async({page}) => {
    await page.goto(mainPageSite);

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(loginSite);
    await expect(page.locator('h1')).toHaveText('Login');
});
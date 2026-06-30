import { test, expect } from '@playwright/test';
import context  from '@playwright/test'

const addProductSite = 'https://commitquality.com/add-product'
const mainPageSite = 'https://commitquality.com';

test('is name input empty,', async({page}) => {
    await page.goto(addProductSite);
    const nameInput = page.getByLabel('Name');
    await nameInput.fill('');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();
  
    await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
});
test('is name input less than 2 characters,', async({page}) => {
    await page.goto(addProductSite);
    const nameInput = page.getByLabel('Name');
    await nameInput.fill('A');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();
    await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
});

test('is name input have more than 2 characters,', async({page}) => {
    await page.goto(addProductSite);
    const nameInput = page.getByLabel('Name');
    await nameInput.fill('ABCDE');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();
    await expect(page.getByText('Name must be at least 2 characters.')).not.toBeVisible();
});

test('is price input empty,', async({page}) => {
    await page.goto(addProductSite);
    const priceInput = page.getByLabel('Price');
    await priceInput.fill('');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();

    await expect(page.getByText('Price must not be empty and within 10 digits')).toBeVisible();
});

test('is price input have more than 10 digits,', async({page}) => {
    await page.goto(addProductSite);
    const priceInput = page.getByLabel('Price');
    await priceInput.fill('12345678901');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();

   await expect(page.getByText('Price must not be empty and within 10 digits')).toBeVisible();
});

test('is datestoced is empty,', async({page}) => {
    await page.goto(addProductSite);
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click(); 

     await expect(page.getByText('Date must not be empty.')).toBeVisible();
});

test('is date input have valid date,', async({page}) => {
    await page.goto(addProductSite);
    const dateInput = page.getByLabel('Date Stocked');
    await dateInput.fill('1111-11-11');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();
    await expect(page.getByText('Date must not be older than 100 years.')).toBeVisible();
});

test('is values valid,', async({page}) => {
    await page.goto(addProductSite);
    const nameInput = page.getByLabel('Name');
    const priceInput = page.getByLabel('Price');
    const dateInput = page.getByLabel('Date Stocked');
    await nameInput.fill('Valid Product');
    await priceInput.fill('999');
    await dateInput.fill('2023-01-01');
    const submitButton = page.getByRole('button', {name: 'Submit'});
    await submitButton.click();
    const row = page.locator('table tr').filter({ hasText: 'Valid Product' });
    await expect(page).toHaveURL(mainPageSite);
    await expect(row).toBeVisible();
    
});

test('is cancel button working', async({page}) => {
    await page.goto(addProductSite);  
    await page.getByRole('link', {name: 'cancel'}).click();
    await expect(page).toHaveURL(mainPageSite);
}   );

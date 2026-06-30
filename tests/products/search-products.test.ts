import { test, expect } from '@playwright/test';

const mainPageSite = 'https://commitquality.com/'
const addProductSite = 'https://commitquality.com/add-product'
test('is text show in placeholder', async({page}) => {
    await page.goto(mainPageSite);
    const input = page.getByRole('textbox');
    await input.fill('Test value');
    await expect(input).toHaveValue('Test value');
});

test('is search working', async({page}) => {
    await page.goto(mainPageSite);
    
    const input = page.getByRole('textbox');
    await input.fill('Product 1');
    await page.getByRole('button', {name: 'Filter'}).click();
    const product = page.getByRole('table');//.getByRole('row',{name: 'Product 1', exact: true});
    await expect(product).toBeVisible();
});

test('is search working with no results', async({page}) => {
    await page.goto(mainPageSite);  
    const input = page.getByRole('textbox');
    await input.fill('Non existing product'); 
    await page.getByRole('button', {name: 'Filter'}).click();
    const noResultsMessage = page.getByText('No products found');
    await expect(noResultsMessage).toBeVisible();
});

test('is search working with empty input', async({page}) => {
    await page.goto(mainPageSite);  
    const input = page.getByRole('textbox');    
    await input.fill('');
    await page.getByRole('button', {name: 'Filter'}).click();
    const product = page.getByRole('table');
    await expect(product).toBeVisible();
});

test('is reset button working', async({page}) => {
    await page.goto(mainPageSite);  
    const input = page.getByRole('textbox');
    await input.fill('Product 1');
    const product = page.getByRole('table');
    await page.getByRole('button', {name: 'Reset'}).click();
    await expect(input).toHaveValue('');
    await expect(product).toBeVisible();
}   );

test('is showmore button working', async({page}) => {
    await page.goto(mainPageSite);  
    const showMoreButton = page.getByRole('button', {name: 'Show More'});
    const rowsbeforeClick = page.locator('table tr');
    const rowCountbeforeClick = await rowsbeforeClick.count();
    
    await showMoreButton.click();
    const rowsAfterClick = page.locator('table tr');
    const rowCountAfterClick = await rowsAfterClick.count();
    expect(rowCountAfterClick).toBeGreaterThan(rowCountbeforeClick);
}   );

test('navigate to add product', async({page}) => {
    await page.goto(mainPageSite);

    await page.getByRole('link', { name: 'Add a Product' }).click();
    await expect(page).toHaveURL(addProductSite);
    await expect(page.locator('h1')).toHaveText('Add Product');
});

test('navigate to x.com account', async({page}) => {
    await page.goto(mainPageSite);
    await page.getByRole('link', { name: `@commitquality` }).click();
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL('https://x.com/commitquality');
});
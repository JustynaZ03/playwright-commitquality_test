import { test, expect } from '@playwright/test';

const iFramePage = 'https://commitquality.com/practice-iframe';
const addProductSite = 'https://commitquality.com/add-product'

test('is search texbox working', async({page}) => {
    await page.goto(iFramePage);
    const iFrame = page.frameLocator('iframe');
    await iFrame.getByRole('textbox').fill('Product 1');
    await iFrame.getByRole('button', {name: 'Filter'}).click();
    const product = iFrame.getByRole('table');
    await expect(product).toBeVisible();
});


test('is search working', async({page}) => {
    await page.goto(iFramePage);
    const iFrame = page.frameLocator('iframe');
    const input = iFrame.getByRole('textbox');
    await input.fill('Product 1');
    await iFrame.getByRole('button', {name: 'Filter'}).click();
    const product = iFrame.getByRole('table');//.getByRole('row',{name: 'Product 1', exact: true});
    await expect(product).toBeVisible();
});

test('is search working with no results', async({page}) => {
    await page.goto(iFramePage);  
    const iFrame = page.frameLocator('iframe');
    const input = iFrame.getByRole('textbox');
    await input.fill('Non existing product'); 
    await iFrame.getByRole('button', {name: 'Filter'}).click();
    const noResultsMessage = iFrame.getByText('No products found');
    await expect(noResultsMessage).toBeVisible();
});

test('is search working with empty input', async({page}) => {
    await page.goto(iFramePage);  
    const iFrame = page.frameLocator('iframe');
    const input = iFrame.getByRole('textbox');    
    await input.fill('');
    await iFrame.getByRole('button', {name: 'Filter'}).click();
    const product = iFrame.getByRole('table');
    await expect(product).toBeVisible();
});

test('is reset button working', async({page}) => {
    await page.goto(iFramePage);  
    const iFrame = page.frameLocator('iframe');
    const input = iFrame.getByRole('textbox');
    await input.fill('Product 1');
    const product = iFrame.getByRole('table');
    await iFrame.getByRole('button', {name: 'Reset'}).click();
    await expect(input).toHaveValue('');
    await expect(product).toBeVisible();
}   );

test('is showmore button working', async({page: page}) => {
    await page.goto(iFramePage);  
    const iFrame = page.frameLocator('iframe');
    const showMoreButton = iFrame.getByRole('button', {name: 'Show More'});
    const rowsbeforeClick = iFrame.locator('table tr');
    const rowCountbeforeClick = await rowsbeforeClick.count();
    
    await showMoreButton.click();
    const rowsAfterClick = iFrame.locator('table tr');
    const rowCountAfterClick = await rowsAfterClick.count();
    expect(rowCountAfterClick).toBeGreaterThan(rowCountbeforeClick);
}   );

test('navigate to add product', async({page}) => {
    await page.goto(iFramePage);
    const iFrame = page.frameLocator('iframe');
    await iFrame.getByRole('link', { name: 'Add a Product' }).click();
    const iFrameUrl = page.frameLocator('iframe');
    await expect(iFrameUrl.locator('h1')).toHaveText('Add Product');
});

test('navigate to x.com account', async({page}) => {
    await page.goto(iFramePage);
    const iFrame = page.frameLocator('iframe');
    await iFrame.getByRole('link', { name: `@commitquality` }).click();
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL('https://x.com/commitquality');
});
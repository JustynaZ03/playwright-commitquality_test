import { test, expect } from '@playwright/test';

const practiseDynamicTextSite = 'https://commitquality.com/practice-dyanmic-text';

test('is dynamic text visible after clicking the button with wait for', async({page}) => {
    await page.goto(practiseDynamicTextSite);
    const button = page.getByRole('button', {name: 'Always visible'});
    await button.click();
    const buttonAfterClick = page.getByRole('button', {name: 'I am visible after 5 seconds'});
    await expect(buttonAfterClick).toBeVisible({timeout: 150000});
});

test('is dynamic text visible after clicking the button', async({page}) => {
        await page.goto(practiseDynamicTextSite);
    const button = page.getByRole('button', {name: 'Always visible'});
    await button.click();
    const buttonAfterClick = page.getByRole('button', {name: 'Loading'});
    await expect(buttonAfterClick).toBeVisible();
});

test('is dynamic text visible after clicking the button with wait and click again', async({page}) => {
    await page.goto(practiseDynamicTextSite);
    const button = page.getByRole('button', {name: 'Always visible'});
    await button.click();
    const buttonAfterClick = page.getByRole('button', {name: 'I am visible after 5 seconds'});
    await expect(buttonAfterClick).toBeVisible({timeout: 150000});
    await buttonAfterClick.click();
    const buttonClick = page.getByRole('button', {name: 'Loading'});
    await expect(buttonClick).toBeVisible();
});
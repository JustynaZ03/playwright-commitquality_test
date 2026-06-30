import { test, expect } from '@playwright/test';

test('is alert popup working', async({page}) => {
    await page.goto('https://commitquality.com/practice-random-popup');
    const alertPopup = page.locator('.overlay-content');
    await expect(alertPopup).toBeVisible();
}   );

test('is popup close button working', async({page}) => {
    await page.goto('https://commitquality.com/practice-random-popup');
    const alertPopup = page.locator('.overlay-content');
    const closeButton = page.getByRole('button', {name: 'Close'});
    await closeButton.click();
    await expect(alertPopup).not.toBeVisible();
}   );
import { test, expect } from '@playwright/test';

const practiseDragAndDropSite = 'https://commitquality.com/practice-drag-and-drop';

test('is drag and drop working', async({page}) => {
    await page.goto(practiseDragAndDropSite);
    const source = page.getByTestId('small-box');
    const target = page.getByTestId('large-box');
    await source.dragTo(target);
    const message = page.getByText('Success!');
    await expect(message).toBeVisible();
});
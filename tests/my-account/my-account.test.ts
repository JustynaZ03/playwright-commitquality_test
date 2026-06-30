import { test, expect } from '@playwright/test';
const myAccountSite = 'https://commitquality.com/account'

test('is name editable', async({page}) => { 
    await page.goto(myAccountSite);
    await page.locator('span', {hasText: '+'}).click();
    //await page.locator('span').click();
    const name = page.getByTestId('name-textbox');
    await name.fill('Ugabuga');
    await page.getByRole('button',{name: 'Save'}).click();
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Name: Ugabuga \nYoutube: CommitQuality');

        await dialog.accept();
    });
});

test('is youtube editable', async({page}) => { 
    await page.goto(myAccountSite);
    await page.locator('span', {hasText: '+'}).click();
    //await page.locator('span').click();
    const youtube = page.getByTestId('yotuube-channel-textbox');
    await youtube.fill('Ugabuga');
    await page.getByRole('button',{name: 'Save'}).click();
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Name: CommitQuality \nYoutube: Ugabuga');

        await dialog.accept();
    });
});

test('if span button close corectly', async({page}) => { 
    await page.goto(myAccountSite);
    await page.locator('span', {hasText: '+'}).click();
    await expect(page.locator('span', {hasText: '-'}));
    await page.locator('span', {hasText: '-'}).click();
    await expect(page.locator('span', {hasText: '+'}));
});
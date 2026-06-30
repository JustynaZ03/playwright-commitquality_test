import { test, expect } from '@playwright/test';
const fileDownloadSite = 'https://commitquality.com/practice-file-download';
test('is download working', async({page}) => { 
    await page.goto(fileDownloadSite);
    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('button', { name: 'Download File' }).click();

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('dummy_file.txt');
    
});
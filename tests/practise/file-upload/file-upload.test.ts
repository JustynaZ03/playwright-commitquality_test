import { test, expect } from '@playwright/test';
const practiseFileUpload = 'https://commitquality.com/practice-file-upload';

test('is file upload working', async({page}) => {
    await page.goto(practiseFileUpload);
    const filePath = 'tests/practise/file-upload/test-file/emu.png';
    const fileUploadInput = page.locator('input[type="file"]');
    await fileUploadInput.setInputFiles(filePath);
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('File successfully uploaded!');
        await dialog.accept();
    });
    await page.getByRole('button', {name: 'Submit'}).click();
});

test('is file upload working without file path', async({page}) => {
    await page.goto(practiseFileUpload);
    await page.getByRole('button', {name: 'Submit'}).click();
    expect(page.getByText('Please select a file to upload.')).toBeVisible();
});
  
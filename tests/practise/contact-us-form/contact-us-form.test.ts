import { test, expect } from '@playwright/test';
const practiseContactForm = 'https://commitquality.com/practice-contact-form';

test('is contact us form working', async({page}) => {
    await page.goto(practiseContactForm);
    const nameInput = page.getByLabel('Name:');
    await nameInput.fill('John');
    const emailInput = page.getByTestId('email');
    await emailInput.fill('mail@gmail.com');
    
    const dropdown = page.locator('select')
    const option1 = dropdown.selectOption({label: 'General'});
    await expect(dropdown).toHaveValue('General');
    const option2 = dropdown.selectOption({label: 'Technical'});
    //await expect(dropdown).toHaveValue('Technical');
    const option3 = dropdown.selectOption({label: 'Billing'});
    //await expect(dropdown).toHaveValue('Billing');

    const dateInput = page.getByTestId('dob');
    await dateInput.fill('2001-11-11');

    const checkbox = page.getByTestId('practice-checkbox');
    await checkbox.check();

   await page.getByRole('button', {name: 'Submit'}).click();

    await expect(page.getByText('Thanks for contacting us, we will never respond!')).toBeVisible();
});

test('is name field work without content', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const nameInput = page.getByLabel('Name:');
    await nameInput.fill('');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Name is required.')).toBeVisible();
});

test('is email field work without content', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const emailInput = page.getByTestId('email');
    await emailInput.fill('');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Email is required.')).toBeVisible();
});

test('is email has a wrong syntax', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const emailInput = page.getByTestId('email');
    await emailInput.fill('mail');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Email is invalid.')).toBeVisible();
});

test('is dropdown work without content', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const dropdown = page.locator('select');
    await dropdown.selectOption({label: 'Select an option'});
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Query Type is required.')).toBeVisible();
});

test('is date of birth work without date', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const dateInput = page.getByTestId('dob');
    await dateInput.fill('');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Date of Birth is required.')).toBeVisible();
});

test('is checkbox work without checking', async ({page}) =>  {
    await page.goto(practiseContactForm);
    const checkbox = page.getByTestId('practice-checkbox');
    await checkbox.uncheck();
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText("Please check the box to confirm you're aware that this is a practice website.")).toBeVisible();
});

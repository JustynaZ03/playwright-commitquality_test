import { test, expect } from '@playwright/test';    

const loginSite = 'https://commitquality.com/login';

test('is login form working and logout button work correctly', async({page}) => {
    await page.goto(loginSite);
    const usernameInput = page.getByTestId('username-textbox');
    const passwordInput = page.getByTestId('password-textbox');
    const loginButton = page.getByRole('button', {name: 'Login'});
    await usernameInput.fill('test');
    await passwordInput.fill('test');
    await loginButton.click();
    await expect(page).toHaveURL('https://commitquality.com');
    const logoutLink = page.getByRole('link', {name: 'Logout'});
    await expect(logoutLink).toBeVisible();

    logoutLink.click();
    await expect(logoutLink).not.toBeVisible();
});

test('is login form working with empty fields', async({page}) => {
    await page.goto(loginSite);
    const usernameInput = page.getByTestId('username-textbox');
    const passwordInput = page.getByTestId('password-textbox');
    const loginButton = page.getByRole('button', {name: 'Login'});
    await usernameInput.fill('');
    await passwordInput.fill('');
    await loginButton.click();
    const ErrorMessageForBothEmptyFields = page.getByText('Please enter a username and password');
    await expect(ErrorMessageForBothEmptyFields).toBeVisible();

    await usernameInput.fill('');
    await passwordInput.fill('test');
    await loginButton.click();
    const ErrorMessageForEmptyUsername = page.getByText('Please enter a username and password');
    await expect(ErrorMessageForEmptyUsername).toBeVisible();

    await usernameInput.fill('test');
    await passwordInput.fill('');
    await loginButton.click();
    const ErrorMessageForEmptyPassword = page.getByText('Please enter a username and password');
    await expect(ErrorMessageForEmptyPassword).toBeVisible();
}   );

test('is login form working with wrong credentials', async({page}) => {
    await page.goto(loginSite);
    const usernameInput = page.getByTestId('username-textbox'); 
    const passwordInput = page.getByTestId('password-textbox');
    const loginButton = page.getByRole('button', {name: 'Login'});
    await usernameInput.fill('test');
    await passwordInput.fill('passowrd');
    await loginButton.click();
    const ErrorMessageForLogin = page.getByText('Invalid username or password');
    await expect(ErrorMessageForLogin).toBeVisible();

    await usernameInput.fill('wrongUsername');
    await passwordInput.fill('test');
    await loginButton.click();
    const ErrorMessageForPassword = page.getByText('Invalid username or password');
    await expect(ErrorMessageForPassword).toBeVisible();
}   );

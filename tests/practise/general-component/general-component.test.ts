import { test, expect } from '@playwright/test';

const practiseGeneralComponentSite = 'https://commitquality.com/practice-general-components';

test('is click me button works', async({page}) => {     
    await page.goto(practiseGeneralComponentSite);
    const clickMeButton = page.getByTestId('basic-click');
    await clickMeButton.click();
    const message = page.getByText('Button clicked');
    await expect(message).toBeVisible();
});

test('is double click me button works', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const clickMeButton = page.getByRole('button', {name: 'Double click me'});
    await clickMeButton.dblclick();
    const message = page.getByText('Button double clicked');
    await expect(message).toBeVisible();
});

test('is right click me button works', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const clickMeButton = page.getByRole('button', {name: 'Right click me'});
    await clickMeButton.click({ button: 'right' });
    const message = page.getByText('Button right mouse clicked');
    await expect(message).toBeVisible();
}   );

test('is hover working on buttons', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const hoverClickMe = page.getByTestId('basic-click');
    await hoverClickMe.hover();

    const hoverDoubleClickMe = page.getByRole('button', {name: 'Double click me'});
    await hoverDoubleClickMe.hover();

    const hoverRightClickMe = page.getByRole('button', {name: 'Right click me'});
    await hoverRightClickMe.hover();

    await expect(hoverClickMe).toBeVisible();
    await expect(hoverDoubleClickMe).toBeVisible();
    await expect(hoverRightClickMe).toBeVisible();
});

test('is radio buttons working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const radioOption1 = page.getByTestId('option1');
    const radioOption2 = page.getByTestId('option2');

    await radioOption1.check();
    await expect(radioOption1).toBeChecked();
    await expect(radioOption2).not.toBeChecked();

    await radioOption2.check();
    await expect(radioOption1).not.toBeChecked();
    await expect(radioOption2).toBeChecked();

     await radioOption2.check();
    await expect(radioOption1).not.toBeChecked();
    await expect(radioOption2).toBeChecked();
});

test('is select dropdown working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const dropdown = page.locator('select')
    const option1 = dropdown.selectOption({label: 'Option 1'});
    await expect(dropdown).toHaveValue('option1');
    const option2 = dropdown.selectOption({label: 'Option 2'});
    await expect(dropdown).toHaveValue('option2');
    const option3 = dropdown.selectOption({label: 'Option 3'});
    await expect(dropdown).toHaveValue('option3');
});

test('is checkbox working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const checkbox1 = page.getByTestId('checkbox1');
    const checkbox2 = page.getByTestId('checkbox2');
     const checkbox3 = page.getByTestId('checkbox3');

    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    await checkbox1.uncheck();
    await expect(checkbox1).not.toBeChecked();

    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();

    await checkbox3.check();
    await expect(checkbox3).toBeChecked();
    await checkbox3.uncheck();
    await expect(checkbox3).not.toBeChecked();
});

test('is links in the same tab working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    const linkToYouTube = page.getByTestId('link-same-tab')
    await linkToYouTube.click();
    await expect(page).toHaveURL('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2F%40commitquality%3Fcbrd%3D1&gl=PL&m=0&pc=yt&cm=2&hl=en&src=1');
});

test('is links opening in new tab working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    await page.getByTestId('link-newtab').click();
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2F%40commitquality%3Fcbrd%3D1&gl=PL&m=0&pc=yt&cm=2&hl=en&src=1');

});
test('is link to practise page in the same tab working', async({page}) => {
    await page.goto(practiseGeneralComponentSite);
    await page.getByTestId('link-newtab-practice').click();
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL('https://commitquality.com/practice');
});

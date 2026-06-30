import { test, expect } from '@playwright/test';

const practiseAccordions = 'https://commitquality.com/practice-accordions';

test('is click me button works', async({page}) => {     
    await page.goto(practiseAccordions);
    const clickMeAccordion1 = page.getByRole('button', {name: 'Accordion 1'}).click();
    const clickMeButton = page.getByTestId('basic-click');
    await clickMeButton.click();
    const message = page.getByText('Button clicked');
    await expect(message).toBeVisible();
});

test('is double click me button works', async({page}) => {
    await page.goto(practiseAccordions);
    const clickMeAccordion1 = page.getByRole('button', {name: 'Accordion 1'}).click();
    const clickMeButton = page.getByTestId('double-click');
    await clickMeButton.dblclick();
    const message = page.getByText('Button double clicked');
    await expect(message).toBeVisible();
});

test('is right click me button works', async({page}) => {
    await page.goto(practiseAccordions);
     const clickMeAccordion1 = page.getByRole('button', {name: 'Accordion 1'}).click();
    const clickMeButton = page.getByTestId('right-click');
    await clickMeButton.click({ button: 'right' });
    const message = page.getByText('Button right mouse clicked');
    await expect(message).toBeVisible();
}   );

test('is hover working on buttons', async({page}) => {
    await page.goto(practiseAccordions);
    const clickMeAccordion1 = page.getByRole('button', {name: 'Accordion 1'}).click();
    const hoverClickMe = page.getByTestId('basic-click');
    await hoverClickMe.hover();

    const hoverDoubleClickMe = page.getByTestId('double-click');
    await hoverDoubleClickMe.hover();

    //const hoverRightClickMe = page.getByRole('button', {name: 'Right click me'});
    const hoverRightClickMe = page.getByTestId('right-click');
    await hoverRightClickMe.hover();

    await expect(hoverClickMe).toBeVisible();
    await expect(hoverDoubleClickMe).toBeVisible();
    await expect(hoverRightClickMe).toBeVisible();
});

test('is radio buttons working', async({page}) => {
    await page.goto(practiseAccordions);
    const clickMeAccordion2 = page.getByRole('button', {name: 'Accordion 2'}).click();
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


test('is checkbox working', async({page}) => {
    await page.goto(practiseAccordions);
    const clickMeAccordion3 = page.getByRole('button', {name: 'Accordion 3'}).click();
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
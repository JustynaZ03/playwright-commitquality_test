import { test, expect } from '@playwright/test';
const practiceClockSite = 'https://commitquality.com/practice-clock'
test('is current time working', async({page}) => { 
    await page.goto(practiceClockSite);
    const timeText =  await page.getByTestId('clock').textContent();
    expect(timeText).not.toBeNull();
    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        });
    expect(time).toEqual(timeText);
});

test('is countdown working', async({page}) => { 
    test.setTimeout(400000);
    await page.goto(practiceClockSite);

    await expect(page.getByText('YOU WON... GO SUBSCRIBE TO COMMIT QUALITY')).toBeVisible({timeout: 310000});
});
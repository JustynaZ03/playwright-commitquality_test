import { test, expect } from '@playwright/test';
const mockDataLayerSite = 'https://commitquality.com/practice-mock-data-layer';


test('is mock data layer works', async({page}) => {
    await page.goto(mockDataLayerSite);

    const dataLayer = await page.evaluate(() => {
        return (window as any).dataLayer;
    });

    expect(dataLayer).toMatchObject({
        pageName: 'MockDataLayer',
        subscribedToCommitQuality: true,
        favouriteYoutubeChannel: 'CommitQuality',
    });
  
});
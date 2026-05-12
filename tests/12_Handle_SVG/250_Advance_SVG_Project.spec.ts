import { test, expect, Locator } from '@playwright/test';

test('Advance SVG Project', async ({ page }) => {
    // Navigate to the SVG project page
    await page.goto('https://simplemaps.com/svg/country/in');

    // Locate all the state names in India
    const stateNames = await page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text" and contains(@class,"sm_label")]').allTextContents();

    // Iterate the state names and once we reach Uttar Pradesh, click it
    for (const state of stateNames) {
        console.log(state);
        if (state.startsWith('Uttar')) {
            //await page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="path" and contains(@class,"INUP")]').click();
            await page.locator('.sm_state.sm_state_INUP').click();
            break;
        }
    }
    await page.waitForTimeout(2000);

});
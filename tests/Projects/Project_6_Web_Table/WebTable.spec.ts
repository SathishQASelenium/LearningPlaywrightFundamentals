import { test, expect } from '@playwright/test';

test('Web Table test', async ({ page }) => {

    // Navigate to the Web Table page
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    // Click on the search box and type 'kabir'
    await page.locator('#employee-search').click();
    await page.locator('#employee-search').fill('kabir');

    // Search the results and click on the checkbox for 'Kabir.Khan'
    await page.locator("tr:has(td:text('Kabir.Khan'))").locator("td").first().click();

    // Validate the Selected Output has the text 'Kabir.Khan'
    await expect(page.locator('#selected-output')).toHaveText('Kabir.Khan');

});
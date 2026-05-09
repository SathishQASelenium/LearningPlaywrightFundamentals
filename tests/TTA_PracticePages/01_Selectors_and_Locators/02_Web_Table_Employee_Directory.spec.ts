import { test, expect } from '@playwright/test';

test('CloudOps India Employee Directory', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    // Click the checkbox beside a username using XPath preceding-sibling. Click the checkbox beside the username "Rohan.Mehta"
    await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input[@type="checkbox"]').click();

    // Click the checkbox beside a username using XPath following-sibling. Click the checkbox beside the username "Kabir.Khan"
    await page.locator('//td[text()="Kabir.Khan"]/preceding-sibling::td/input[@type="checkbox"]').click();

    // Find a complete row using CSS tr:has(td:text(...))
    await page.locator('tr:has(td:text("Ishaan.Das"))').locator('td').first().click();

    // Read all the data after a username using following-sibling columns.
    const data = await page.locator('//td[text()="Ishaan.Das"]/following-sibling::td').allTextContents();
    console.log(data);

    // Filter rows by team, city, role, or status without relying on hardcoded row numbers.
    await page.locator('#employee-search').fill('Inactive');
    await page.locator('//td[text()="Vikram.Singh"]/preceding-sibling::td/input[@type="checkbox"]').click();

});
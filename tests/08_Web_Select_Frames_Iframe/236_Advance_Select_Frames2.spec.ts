import { test, expect } from '@playwright/test';

test('Select Options in Dropdown using getByText', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    // Selecting the Programming language
    // 1. Initially click on the dropdown to open the options
    await page.locator('//div[@data-testid="dropdown-language"]').click();
    // 2. Now we can use getByText to select the option from the dropdown
    await page.getByText("JavaScript").click();


    // Selecting the Experience level
    await page.locator("#experience-shell").click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

    await page.waitForTimeout(5000);

});
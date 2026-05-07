import { test, expect } from '@playwright/test';

test('Select Options in herokuapp', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // await page.locator("#dropdown").click();

    // await page.selectOption("#dropdown", "Option 1");

    // https://playwright.dev/docs/api/class-elementhandle#element-handle-select-option
    // We have first find the locator and then we can select the option from the dropdown

    await page.locator("#dropdown").selectOption("Option 1");

    await page.waitForTimeout(2000);
});
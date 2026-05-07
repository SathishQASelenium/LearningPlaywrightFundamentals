import { test, expect } from '@playwright/test';

test('Select Options in Dropdown using getByText with Advanced Stuff', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // Single Select Dropdown -> Click on the dropdown and then select the option
    await page.locator("#rs-single").click();
    await page.getByText("Cypress").click();


    // Multi Select Dropdown -> Click on the dropdown and then select the options
    await page.locator("#rs-multi").click();
    await page.getByText("Pytest", { exact: true }).click(); // As we are getting 3 times pytest in the page
    await page.getByText("JUnit", { exact: true }).click();
    await page.keyboard.press("Escape"); // To close the dropdown after selecting the options


    // Creatable Dropdown -> Click on the dropdown and then select the options
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");


    // Grouped — categorised options -> Click on the dropdown and then select the option from the specific group
    await page.locator("#rs-grouped").click();
    await page.getByText("AWS").click();


    // Async Dropdown to search a city and select it
    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();

    await page.waitForTimeout(2000);

});
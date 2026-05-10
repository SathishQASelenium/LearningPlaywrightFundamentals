import { test, expect } from '@playwright/test'

test('SpiceJet Hover Test', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');

    // Hover on the 'Add-ons' menu item
    await page.getByText('Add-ons', { exact: true }).hover();

    // Wait for the dropdown to appear and click on 'FlyEarly'
    await page.getByText('FlyEarly', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    // Hover on the 'Add-ons' menu item
    await page.getByText('Add-ons', { exact: true }).hover();
    const addons = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();
    console.log(addons);
});
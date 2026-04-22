// Same Context, Multiple Pages
// https://chatgpt.com/share/69e9055c-0860-83e8-869d-53e9514d2f92
import { test, expect } from '@playwright/test';

test('Same Context Multiple Pages - Basic Example', async ({ browser }) => {

    // Create ONE browser context
    const context = await browser.newContext();

    // Open first page (Tab 1)
    const page1 = await context.newPage();
    await page1.goto('https://example.com');

    console.log('Page1 Title:', await page1.title());

    // Open second page (Tab 2) in SAME context
    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev');

    console.log('Page2 Title:', await page2.title());

    // Open third page (Tab 3)
    const page3 = await context.newPage();
    await page3.goto('https://google.com');

    console.log('Page3 Title:', await page3.title());

    // Assertion example
    await expect(page1).toHaveTitle(/Example/);
    await expect(page2).toHaveTitle(/Playwright/);

    // Close context (closes all pages)
    await context.close();
});
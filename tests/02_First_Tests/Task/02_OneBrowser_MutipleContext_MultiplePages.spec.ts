// One Browser, Multiple Contexts, Multiple Pages
// https://chatgpt.com/share/69e904cc-b89c-83e8-86c6-2f87f5f3d8dc
import { test, expect, chromium } from '@playwright/test';

test('One Browser → Multiple Contexts → Multiple Pages', async () => {

    // 1. Launch ONE browser
    const browser = await chromium.launch({ headless: false });

    // 2. Create Context 1 (like User 1)
    const context1 = await browser.newContext();

    // Pages in Context 1
    const page1A = await context1.newPage();
    const page1B = await context1.newPage();

    await page1A.goto('https://app.vwo.com');
    await page1B.goto('https://playwright.dev');

    console.log('Context1 - Page1 Title:', await page1A.title());
    console.log('Context1 - Page2 Title:', await page1B.title());

    // 3. Create Context 2 (like User 2 - isolated session)
    const context2 = await browser.newContext();

    // Pages in Context 2
    const page2A = await context2.newPage();
    const page2B = await context2.newPage();

    await page2A.goto('https://app.vwo.com');
    await page2B.goto('https://google.com');

    console.log('Context2 - Page1 Title:', await page2A.title());
    console.log('Context2 - Page2 Title:', await page2B.title());

    // 4. Simple validation
    await expect(page1A).toHaveTitle(/VWO/);
    await expect(page2B).toHaveTitle(/Google/);

    // 5. Close browser
    await browser.close();
});
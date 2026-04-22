// One Browser, Multiple Contexts
// https://chatgpt.com/share/69e903ae-b67c-83e8-85e2-64a07c0a52a9
import { test, chromium } from '@playwright/test';

test('one browser multiple contexts basic example', async () => {

    // 1. Launch browser
    const browser = await chromium.launch({ headless: false });

    // 2. Create first context (User 1)
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    // 3. Create second context (User 2)
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    // 4. Navigate both pages
    await page1.goto('https://app.vwo.com/#login');
    await page2.goto('https://app.vwo.com/#login');

    // 5. Do some actions (just for demo)
    console.log('Title from Context 1:', await page1.title());
    console.log('Title from Context 2:', await page2.title());

    // 6. Close contexts
    await context1.close();
    await context2.close();

    // 7. Close browser
    await browser.close();
});
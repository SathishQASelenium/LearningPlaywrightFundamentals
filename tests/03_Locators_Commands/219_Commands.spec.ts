import { test, expect } from '@playwright/test';

test('goto with different waitUtil options', async ({ page }) => {

    // `commit` — the server has responded. 
    // HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.
    await page.goto('https://app.vwo.com', { waitUntil: 'commit' });
    console.log("commit: server responded");

    // // Wait for HTML to be parsed
    await page.goto('https://app.vwo.com', { waitUntil: 'domcontentloaded' });
    console.log("domcontentloaded: HTML parsed");

    // DEFAULT — wait for everything (images, CSS, scripts)
    await page.goto('https://app.vwo.com', { waitUntil: 'load' });
    console.log("load: all resources loaded");

    // SLOWEST — wait for all network activity to stop
    await page.goto('https://app.vwo.com', { waitUntil: 'networkidle' });
    console.log("networkidle: no requests for 500ms");

});
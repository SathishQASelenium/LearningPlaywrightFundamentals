import { test, expect, FrameLocator } from '@playwright/test'

test('Keyboard test', async ({ page }) => {

    await page.goto('https://keycode.info/');

    await page.keyboard.press('A');
    await page.screenshot({ path: './tests/10_Keyboard/A.png', fullPage: true });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: './tests/10_Keyboard/ArrowLeft.png', fullPage: true });
    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: './tests/10_Keyboard/Shift+O.png', fullPage: true });

    await page.keyboard.down('Shift');
    await page.keyboard.up('Shift');

    await page.waitForTimeout(2000);
});
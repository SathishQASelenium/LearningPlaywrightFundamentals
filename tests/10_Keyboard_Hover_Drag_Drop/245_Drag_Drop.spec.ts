import { test, expect } from '@playwright/test'

test('Drag and Drop Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');

    // Verify initial positions
    await expect(columnA.locator('header')).toHaveText('A');
    await expect(columnB.locator('header')).toHaveText('B');

    // Perform drag and drop
    await columnA.dragTo(columnB);
    // Verify positions after drag and drop
    await expect(columnA.locator('header')).toHaveText('B');
    await expect(columnB.locator('header')).toHaveText('A');

});
import { test, expect, Locator } from '@playwright/test'

test('Drag and Drop Test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    //await page.locator('#card-write-spec').dragTo(page.locator('[data-status="in-progress"]'));
    //await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    //await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));

    // Manual mouse path - for finicky DnD libraries
    const source = page.locator('#card-write-spec');
    const target = page.locator('[data-status="in-progress"]');

    const sBox = await source.boundingBox();
    const tBox = await target.boundingBox();

    if (!sBox || !tBox) throw new Error('Could not get bounding boxes');

    // Move to center of card
    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();

    // Drag to the top of the "In progress" column
    // Moving it to the top (tBox.y + 10) instead of the center
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + 10, { steps: 25 });

    await page.waitForTimeout(500);
    await page.mouse.up();

    // Verify the card moved to the in-progress section
    await expect(page.locator('[data-status="in-progress"]')).toContainText('Write Playwright spec');

    await page.waitForTimeout(2000);

});
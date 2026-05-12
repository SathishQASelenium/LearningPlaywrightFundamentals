import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        // Locate the Blue circle shape using its ID and click it
        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.click();

        // Validate the content in the output section
        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain('Blue circle');

        // Click on the Q3 bar in the SVG chart
        await page.getByRole('button', { name: /Q3 bar/ }).click();

        // Click on the 4 stars rating radio button
        await page.getByRole('radio', { name: '4 stars' }).click();

        await page.waitForTimeout(2000);

        // Locate all bars and click on each of them
        let allBars = await page.locator('.bar').all();
        for (const bar of allBars) {

            const q = await bar.getAttribute('data-quarter');
            // if....
            await bar.click();
            console.log(q);
        }

    });

});
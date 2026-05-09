import { test, expect } from '@playwright/test';

test.describe('Master multiple element filters on a real login UI', () => {
    test('Capture all right-panel link texts and assert the count before clicking the target link', async ({ page }) => {

        // Navigate to URL
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        // allInnerTexts() - Get the inner text of all elements matching the selector
        const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(`rightPanelLinksTexts: ${rightPanelLinksTexts.length}`); // Print the count of links

        // Assert the count of links
        expect(rightPanelLinksTexts.length).toBe(13);
    });

    test('Filter from many account links and click the one that has exact visible text', async ({ page }) => {
        // Navigate to URL
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        // Get the inner text of all elements matching the selector
        const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();

        // Click on the link with text 'Forgotten Password'
        await page.locator('a.list-group-item', { hasText: 'Forgotten Password' }).click();

        // Assert that the URL has changed to the expected URL after clicking the link
        await expect(page).toHaveURL(/.*#forgotten-password/);
        expect(page.url()).toContain('#forgotten-password');
    });

    test('Collect every footer anchor, print its text and href, then validate important legal links', async ({ page }) => {
        // Navigate to URL
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        // Get all footer anchor elements
        const footerLinks = await page.locator('footer a').all();
        console.log(`Total footer links: ${footerLinks.length}`); // Print the count of footer links

        // Loop through each footer link, print its text and href
        for (const link of footerLinks) {
            console.log(await link.innerText(), ': ', await link.getAttribute('href'));
        }
    });

});

// Note: The tests can be run in serial by using workers=1
// npx playwright test tests/TTA_PracticePages/01_Selectors_and_Locators/01_Multiple_Elemenet_Filter_Login.spec.ts --workers=1
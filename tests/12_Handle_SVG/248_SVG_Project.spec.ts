import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        // If we have multiple SVG elements and if we want to get all of them
        // const svgAllElement: Locator[] = await page.locator('svg').all();
        // console.log(svgAllElement);
        // for(let svgElement in svgAllElement){
        //     console.log(svgElement)
        // }

        const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
        await expect(firstResult.first()).toBeVisible({ timeout: 15000 });

        // Identify all the titles of the products in the search results
        const titlesResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MP') or contains(@data-id,'AI')]/div/a[2]");

        const count: number = await titlesResults.count();
        console.log(`Total products found: ${count}`);

        for (let i = 0; i < count; i++) {
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }

        await page.waitForTimeout(2000);

    });

});
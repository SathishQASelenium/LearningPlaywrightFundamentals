import { test, expect } from "@playwright/test";

test("validate error message with Xpath Locator", async ({ page }) => {
    await page.goto("https://awesomeqa.com/css/");
    // Have to find how many span are there
    const allSpans = await page.locator("div.first span");
    const count = await allSpans.count();
    console.log("Total spans: " + count);

    const span1 = await allSpans.first().textContent();
    const span2 = await allSpans.nth(1).textContent();       // "Span 2"
    const span3 = await allSpans.nth(2).textContent();       // "Span 3!"
    const span5 = await allSpans.nth(4).textContent();       // "Span 5!"
    const lastSpan = await allSpans.last().textContent();    // "Span 7!"

    console.log("Span 1: " + span1);
    console.log("Span 2: " + span2);
    console.log("Span 3: " + span3);
    console.log("Span 5: " + span5);
    console.log("Last Span: " + lastSpan);

    //page.locator().click();

    // We can use for loop to iterate through all spans
    for (let i = 0; i < count; i++) {
        const spanText = await allSpans.nth(i).textContent();
        console.log(`Span ${i + 1}: ${spanText}`);
    }

});
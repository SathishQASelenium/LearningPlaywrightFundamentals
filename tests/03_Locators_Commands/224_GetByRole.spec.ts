import { test, expect } from "@playwright/test";

test("validate error message with Xpath Locator", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: "Make Appointment" }).click();

});

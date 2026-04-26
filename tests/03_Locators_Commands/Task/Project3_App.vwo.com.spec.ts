// Please now automate the App.vwo invalid username and password with error message. But now you have to use get by role.
import { test, expect } from "@playwright/test";

test("validate error message with Playwright getByRole", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    await page.getByRole('textbox', { name: 'Email' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('pass123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    console.log("All actions completed ✅");
    let error_message = page.locator('#js-notification-box-msg');
    // error_message.getByText()
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");
});
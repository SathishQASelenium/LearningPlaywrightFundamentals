import { test, expect } from "@playwright/test";

test("validate error message with Xpath Locator", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >

    // Rule 2 - Css Seecltor 
    // id -> #
    // class -> .

    // Create locators — nothing happens yet (lazy)
    let usernameField = page.locator("xpath=//input[@id='login-username']");
    let passwordField = page.locator("xpath=//input[@id='login-password']");
    let loginButton = page.locator("xpath=//button[@id='js-login-btn']");

    // NOW Playwright finds the element and acts (auto-wait)

    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    let error_message = page.locator("xpath=//div[@id='js-notification-box-msg']");
    // error_message.getByText()
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});
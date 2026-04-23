/*
1. Navigate to Cura website
2. Click on "Make Appointment" button
3. Fill in login form with username "John Doe" and password "ThisIsNotAPassword"
4. Click on "Login" button
5. Verify the URL has changed to "https://katalon-demo-cura.herokuapp.com/#appointment"
6. Verify the presence of "Make Appointment" header on the page
*/

import { test, expect } from '@playwright/test';

test('cura website navigation with lazy locators', async ({ page }) => {

    // Navigate to Cura website
    page.goto("https://katalon-demo-cura.herokuapp.com/");
    console.log("Navigated to Cura website");

    // Click on "Make Appointment" button
    let makeAppointmentButton = page.locator("#btn-make-appointment"); // Used ID locator
    await makeAppointmentButton.click();
    console.log("Clicked on Make Appointment button");

    // Fill in login form
    let usernameField = page.locator("#txt-username"); // Used ID locator
    let passwordField = page.locator("#txt-password"); // Used ID locator
    let loginButton = page.locator("#btn-login"); // Used ID locator

    await usernameField.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();
    console.log("Filled login form and clicked Login");

    // Verify the changed URL
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    console.log("URL verified ✅");

    // Verify the presence of "Make Appointment" header
    let header = page.locator(".col-sm-12 h2"); // Used Class locator
    await expect(header).toHaveText("Make Appointment");
    console.log("Header text verified ✅");

});
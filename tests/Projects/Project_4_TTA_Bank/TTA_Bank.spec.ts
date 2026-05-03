import { test, expect } from '@playwright/test';

test('Verify that the Balance reduced on Transfer in TTA Bank', async ({ page }) => {
    // Navigate to the URL
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    // Click on Sign Up Button
    await page.getByRole('button', { name: 'Sign Up' }).click();

    // Fill in the Sign Up Form Details and Click on Create Account Button
    await page.getByRole('textbox', { name: 'John Doe' }).fill('Sathish Kumar');
    await page.getByRole('textbox', { name: 'you@example.com' }).fill('sathish@testingacademy.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('Sathish@4321');
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Validate the Opening Balance is $50,000.00
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$50,000.00");

    // Navigate to Transfer Funds Tab
    await page.getByText('Transfer Funds').click();

    // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234567890
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('Transfering $5000 to account number 1234567890');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Review the Transfer Details and Click on Confirm Transfer Button
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();

    // Navigate to Dashboard and Validate the Balance is reduced to $45,000.00
    await page.getByText('Dashboard').click();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");

    // Logout from the Application
    await page.getByRole('button', { name: 'Sign Out' }).click();

});
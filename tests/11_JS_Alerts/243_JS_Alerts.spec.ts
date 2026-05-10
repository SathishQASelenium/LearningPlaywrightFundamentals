import { test, expect } from '@playwright/test'

test.describe('JavaScript Alerts', () => {
    // To group the testcases together

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('JS Alert', async ({ page }) => {
        // Register the dialog handler BEFORE trigerring the alert
        page.once('dialog', async (dialog) => {
            console.log('Alert Type: ' + dialog.type()); // To get the type of the alert (alert, confirm, prompt)
            console.log('Alert Message: ' + dialog.message()); // To get the message of the alert
            expect(dialog.message()).toBe('I am a JS Alert'); // Assertion for the alert message
            await dialog.accept(); // To click on OK button of the alert
        });

        // Different ways to locate the JS Alert button
        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        //await page.getByText('Click for JS Alert').click();
        //await page.locator('//button[text()="Click for JS Alert"]').click();
        //await page.locator('button', { hasText: 'Click for JS Alert' }).click();

        // Assertion for the result text after accepting the alert
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    });

    test('JS Confirm', async ({ page }) => {
        // Register the dialog handler BEFORE trigerring the alert
        page.once('dialog', async (dialog) => {
            console.log('Alert Type: ' + dialog.type());
            console.log('Alert Message: ' + dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
            //await dialog.dismiss();
        });

        //await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        //await page.getByText('Click for JS Confirm').click();
        //await page.locator('//button[text()="Click for JS Confirm"]').click();
        await page.locator('button', { hasText: 'Click for JS Confirm' }).click();

        // Assertion for the result text after accepting the alert with OK
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');

        // Assertion for the result text after dismissing the alert with Cancel
        //await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    });

    test('JS Prompt', async ({ page }) => {
        const inputText = 'Playwright';

        // Register the dialog handler BEFORE trigerring the alert
        page.once('dialog', async (dialog) => {
            console.log('Alert Type: ' + dialog.type());
            console.log('Alert Message: ' + dialog.message());
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept(inputText); // To enter the text in the prompt and click on OK button
            //await dialog.dismiss(); // To click on Cancel button of the prompt
        });

        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

        // Assertion for the result text after accepting the prompt with OK
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);

    });

});
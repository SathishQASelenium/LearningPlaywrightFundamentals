import { test, expect } from '@playwright/test';

test.describe('URL & title along with state Assertions - TestingAcademy', () => {

    test('URL & title assertions', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar.html');
        await page.getByTestId('trigger-depart').click();
        await expect(page).toHaveTitle('Calendar Date Picker — The Testing Academy');
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');

        await expect(page).toHaveTitle(/Calendar/);

        const appUrl = page.url();
        expect(appUrl).toContain('thetestingacademy');

        // expect(page.locator('')).toHaveCSS(''); // toHaveClass

    });

    test('Visible · enabled · disabled · checked', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');

        const agreeCheckbox = page.getByRole('checkbox', { name: /UFT/ });
        const submitBtn = page.getByTestId('profile-submit');

        await expect(agreeCheckbox).not.toBeChecked(); // Validate it is not checked
        await expect(submitBtn).toBeVisible();
        await expect(submitBtn).toBeEnabled();

        await agreeCheckbox.check();
        await expect(agreeCheckbox).toBeChecked(); // Validate it is checked
        await page.waitForTimeout(5000);

    });

});

// Note: I have used the below prompt to generate the md file using opencode
// d:\TheTestingAcademy\LearningPlaywrightFundamentals\tests\17_Expect_Assertions In this folder, can you create a md file containing all the expect that we have in the playwright with one simple example for the interview purpose. The format is very simple, what is expected, how to use it with an example.
// Playwright_Expect_Reference.md file is the created one. Other files i copied from Pramod sir.
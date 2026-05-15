import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {

        // single shadow root
        const card = page.getByTestId('card-account');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('pw');
        await card.getByTestId('card-account-submit').click();
        await expect(page.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');

        // buttons with role + aria-label
        // cart section
        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');
        // quantity section
        const quantity = page.getByTestId('counter-quantity');
        await quantity.getByTestId('counter-quantity-inc').click();
        await quantity.getByTestId('counter-quantity-inc').click();
        await expect(quantity.getByTestId('counter-value')).toHaveText('2');

        // shadow inside shadow
        await page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await page.getByTestId('card-inside-password').fill('pramod@123');
        await page.getByTestId('card-inside-submit').click();
        await expect(page.getByTestId('card-inside-status')).toContainText('pramod@thetestingacdemy.com');

        await page.waitForTimeout(5000);

    });

});
import { test, expect, FrameLocator } from '@playwright/test'

test('iframe test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    // Getting the FrameOne in a variable and using that variable to perform the actions on the elements inside the frame.
    const fromeone: FrameLocator = page.frameLocator('#frame-one');
    await fromeone.locator('#RESULT_TextField-1').fill('Maruti 800');
    await fromeone.locator('#RESULT_TextField-2').fill('Sathish Kumar');
    await fromeone.locator('#RESULT_TextField-3').fill('TN 09 T 6401');

    await fromeone.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await fromeone.locator('#RESULT_TextField-4').fill('2001');
    await fromeone.locator('#RESULT_TextArea-1').fill('My Own Personal Car');

    await fromeone.getByTestId('vehicle-submit').click();

    const vehicleoutput = await fromeone.locator('#vehicle-output').innerText();
    console.log(vehicleoutput);

    await page.waitForTimeout(2000);
});
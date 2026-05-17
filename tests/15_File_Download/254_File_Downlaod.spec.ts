import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Download Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('demo: Download file using setInputFiles', async ({ page }) => {

        // Download text file inside a folder downloads in 15_File_Download folder
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-text').click()
        ]);
        expect(download.suggestedFilename()).toContain('tta-notes');
        await download.saveAs(path.join(__dirname, 'downloads', 'tta-notes.txt'));

        //Download Static file inside a folder downloads in 15_File_Download folder
        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);

        //await staticDownload.saveAs('out/' + staticDownload.suggestedFilename()); // File will be saved under out folder
        await staticDownload.saveAs(path.join(__dirname, 'downloads', staticDownload.suggestedFilename()));

    });

});
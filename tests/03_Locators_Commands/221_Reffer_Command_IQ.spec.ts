/*
* Referer for ALL Requests in a Context :  
 if you load app.vwo.com or the second website, which is our cura.catalone website, which are our two testing websites, right? 
 I want this to be available. The referral should be testingacademy.com.
*/

import { test } from "@playwright/test";

test("set referer for entire context", async ({ browser }) => {
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");

    let page2 = await context.newPage();
    await page2.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");

});
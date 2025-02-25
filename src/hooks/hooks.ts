import { setDefaultTimeout } from "@cucumber/cucumber";
import { Before,After } from "@cucumber/cucumber";
import { chromium,Browser,Page } from "@playwright/test";
import { pageFixure } from "./pageFixure";

let page: Page;
let browser: Browser;

Before(async function(){
    browser = await chromium.launch({headless:false})
    page = await browser.newPage()
    pageFixure.page = page;  
});

After(async function(){
    await page.close()
    await browser.close()
})


setDefaultTimeout(10*1000);
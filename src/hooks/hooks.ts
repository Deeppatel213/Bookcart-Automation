import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Before,After } from "@cucumber/cucumber";
import { chromium,Browser,Page, BrowserContext } from "@playwright/test";
import { pageFixure } from "./pageFixure";

let page: Page;
let browser: Browser;
let context: BrowserContext;
BeforeAll(async function() {
    browser = await chromium.launch({headless:false})

})

Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixure.page = page;  
});

After(async function(){
    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close()
})

setDefaultTimeout(10*1000);
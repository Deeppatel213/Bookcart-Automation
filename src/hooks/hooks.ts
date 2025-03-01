import { AfterAll, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Before,After } from "@cucumber/cucumber";
import { chromium,Browser,Page, BrowserContext } from "@playwright/test";
import { pageFixure } from "./pageFixure";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let page: Page;
let browser: Browser;
let context: BrowserContext;
BeforeAll(async function() {
    getEnv()
    browser = await invokeBrowser();
})

Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixure.page = page;  
});

After(async function({ pickle, result }){
    if (result?.status == Status.FAILED)
    {
        const img = await pageFixure.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`, type:"png"});
        await this.attach(img,"image/png");
    }
    // add screenshot
    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close()
})

setDefaultTimeout(10*1000);
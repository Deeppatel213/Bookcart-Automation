import { Given, Then } from "@cucumber/cucumber"
import { Page, Browser, chromium } from "@playwright/test"

let page: Page;
let browser: Browser;

Given('The user navigates to the website', async function () {
    browser = await chromium.launch({headless:false})
    page = await browser.newPage()
    page.goto("https://bookcart.azurewebsites.net/")
});

Given('The user clicks on the login link', async function () {
    await page.getByRole('button', { name: 'Login' }).click()
});


Given('The user enters a valid username', async function () {

});

Given('The user enters a valid password', async function () {

});

Given('The user clicks on the login button', async function () {

});


Then('The user should be successfully logged in', async function () {

});

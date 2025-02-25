import { Given, Then } from "@cucumber/cucumber"
import { Page, Browser, chromium, expect } from "@playwright/test"
import exp from "constants";

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

Given('The user enters a valid username as {string}', async function (username) {
    await page.getByPlaceholder("Username").fill(username)
  });

Given('The user enters a valid password as {string}', async function (password) {
    await page.getByPlaceholder("Password").fill(password)
  });

Given('The user clicks on the login button', async function () {
    await page.locator("button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base'] span[class='mdc-button__label']").click()
});


Then('The user should be successfully logged in as {string}', async function (expectedUserName) {
    const auctualText = await page.locator("a[class = 'mat-mdc-menu-trigger mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base ng-star-inserted'] span.mdc-button__label span").textContent()
    expect(auctualText?.trim()).toEqual(expectedUserName)
    await browser.close()
});

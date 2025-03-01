import { Given, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixure } from "../../hooks/pageFixure";

Given('The user navigates to the website', async function () {
    pageFixure.page.goto(`${process.env.BASEURL}`)
});

Given('The user clicks on the login link', async function () {
    await pageFixure.page.getByRole('button', { name: 'Login' }).click()
});

Given('The user enters a valid username as {string}', async function (username) {
    await pageFixure.page.getByPlaceholder("Username").fill(username)
  });

Given('The user enters a valid password as {string}', async function (password) {
    await pageFixure.page.getByPlaceholder("Password").fill(password)
  });

Given('The user clicks on the login button', async function () {
    await pageFixure.page.locator("button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base'] span[class='mdc-button__label']").click()
});


Then('The user should be successfully logged in as {string}', async function (expectedUserName) {
    const auctualText = await pageFixure.page.locator("a[class = 'mat-mdc-menu-trigger mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base ng-star-inserted'] span.mdc-button__label span").textContent()
    expect(auctualText?.trim()).toEqual(expectedUserName)
});

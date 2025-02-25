import { Given,When,Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";

const page:Page;

Given('The user search for the {string}', async function (book) {

   await page.getByPlaceholder("Search books or authors").fill(book)
   await page.locator("#mat-option-11").click()
});

When('User add the book to cart', async function () {
    await page.locator("button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base'] span[class='mdc-button__label']").click()
});

Then('the {string} Successfully add to the cart', async function (expectedBook) {
    await page.locator("button[class = 'mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted']").last().click()
    let actualBook = await page.locator("a[_ngcontent-ng-c1856196941]").textContent()
    expect(expectedBook).toEqual(actualBook)
});
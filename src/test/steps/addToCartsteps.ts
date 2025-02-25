import { Given,When,Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixure } from "../../hooks/pageFixure";

Given('The user search for the {string}', async function (book) {

   await pageFixure.page.getByPlaceholder("Search books or authors").fill(book)
   await pageFixure.page.locator("mat-option span.mdc-list-item__primary-text").click()
});

When('User add the book to cart', async function () {
    await pageFixure.page.locator("button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base'] span[class='mdc-button__label']").click()
});

Then('the {string} Successfully add to the cart.', async function (expectedBook) {
    await pageFixure.page.locator("button[class = 'mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted']").last().click()
    let actualBook = await pageFixure.page.getByRole('link', { name: expectedBook }).textContent()
    expect(expectedBook).toEqual(actualBook)
});
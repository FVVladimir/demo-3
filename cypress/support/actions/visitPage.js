import { booksPage } from '../pageObject/pageObjects'

export const visitPage = (url) => {
   cy.visit(booksPage.url);
}
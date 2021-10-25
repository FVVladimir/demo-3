import { booksPage } from '../pageObject/pageObjects'

export const fillSearchField = () => {
    
    cy.get(booksPage.input).type('Git')

}
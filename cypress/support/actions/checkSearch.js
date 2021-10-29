import { booksPage } from '../pageObject/pageObjects'

export const checkSearch = () => {
    
    cy.get(booksPage.input).type('Git')
    cy.get(booksPage.upperRow).eq(0).should('contain', 'Git')

}
import { booksPage } from '../pageObject/pageObjects'

export const checkSearch = () => {
    
    cy.get(booksPage.input).type('Git')
    cy.get('.rt-tr-group').eq(0).should('contain', 'Git')

}
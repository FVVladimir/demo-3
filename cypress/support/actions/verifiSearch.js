import { booksPage } from '../pageObject/pageObjects'

export const verifiSearch = () => {
    
    cy.get('.rt-tr-group').eq(0).should('contain', 'Git')
}
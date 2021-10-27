
import { booksPage } from '../pageObject/pageObjects'


export const getCellName = (cellNameImage) => {    
    
    cy.get(booksPage.cellNameImage).eq(0).should('contain', 'Image')
    cy.get(booksPage.cellNameImage).eq(1).should('contain', 'Title')
    cy.get(booksPage.cellNameImage).eq(2).should('contain', 'Author')
    cy.get(booksPage.cellNameImage).eq(3).should('contain', 'Publisher')
    // cy.get('.rt-tr-group').eq(0).should('contain','Git')
    // cy.get('.rt-tr-group').eq(1).should('contain','Addy')
}
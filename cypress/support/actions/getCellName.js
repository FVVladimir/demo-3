
import { booksPage } from '../pageObject/pageObjects'


export const getCellName = () => {    
    
    cy.get(booksPage.cellNameImage).eq(0).should('contain', 'Image').should('be.visible')
    cy.get(booksPage.cellNameImage).eq(1).should('contain', 'Title').should('be.visible')
    cy.get(booksPage.cellNameImage).eq(2).should('contain', 'Author').should('be.visible')
    cy.get(booksPage.cellNameImage).eq(3).should('contain', 'Publisher').should('be.visible')   
}
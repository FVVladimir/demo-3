import { btnAuth } from "../pageObject/booksPage"


export const checkSort = () => {
    
    cy.get(btnAuth).eq(2).click();
    cy.get('.rt-tr-group').eq(0).should('contain','Addy Osmani');
    cy.get(btnAuth).eq(2).click();
    cy.get('.rt-tr-group').eq(0).should('contain','Richard E');
}
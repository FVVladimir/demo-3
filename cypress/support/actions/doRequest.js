import { booksPage } from '../pageObject/pageObjects'

export const doRequest = (url) => {

    cy.request(booksPage.url).as('myResponse').then(resp => resp.json).then(data => console.log(data));
        
    
}
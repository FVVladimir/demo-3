import { booksPage } from '../pageObject/pageObjects'

export const doRequest = (url) => {

    cy.request(booksPage.urlForRequest).then(response => {
        const respBody = response.body.books;
        console.log(respBody) 
        return cy.wrap(respBody).as('books')
    });
    
    cy.get('@books').then(books => {
        books.map(el => {
            console.log(el.author)
        })
    })
    
}
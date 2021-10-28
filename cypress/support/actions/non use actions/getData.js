import { booksPage } from '../pageObject/pageObjects'

export const getData = (type) => {

    cy.request(booksPage.urlForRequest).then(response => {
        const respBody = response.body.books;
        // console.log(respBody) 
        return cy.wrap(respBody).as('books')
    });

    const arr = []
    
    cy.get('@books').then(books => {
        books.map(el => {            
            arr.push(el[type])            
        })

        console.log(arr)
    })   
      
      
}
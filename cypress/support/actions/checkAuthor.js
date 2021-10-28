import { booksPage } from '../pageObject/pageObjects'

export const checkAuthor = () => {

    cy.request(booksPage.urlForRequest).then(response => {
        const respBody = response.body.books;
        // console.log(respBody) 
        return cy.wrap(respBody).as('books')
    });

    const arr = []
    
    cy.get('@books').then(books => {
        books.map(el => {            
            arr.push(el.author)            
        })

        // console.log(arr)
    })  
    
    const authorNameFromPage = [];

    cy.get('.rt-td:last-child').prev().as('authorNameFromPage');
     cy.get('@authorNameFromPage').each(elem => {
    authorNameFromPage.push(elem.text());
    })
    // console.log(authorNameFromPage)
     
    cy.get('@books').each(($book, i) => {
        expect($book.author).to.equal(authorNameFromPage[i])
    })
      
}
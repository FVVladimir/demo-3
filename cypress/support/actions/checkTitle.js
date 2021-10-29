import { booksPage } from '../pageObject/pageObjects'

export const checkTitle = () => {

    cy.request(booksPage.urlForRequest).then(response => {
        const respBody = response.body.books;
        // console.log(respBody) 
        return cy.wrap(respBody).as('books')
    });

    const arr = []
    
    cy.get('@books').then(books => {
        books.map(el => {            
            arr.push(el.title)            
        })

        // console.log(arr)
    })  
    
    const booksTitleFromPage = [];

cy.get(booksPage.titleName).as('booksTitleFromPage');
cy.get('@booksTitleFromPage').each(elem => {
    booksTitleFromPage.push(elem.text());
    })
    // console.log(booksTitleFromPage)
     
    cy.get('@books').each(($book, i) => {
        expect($book.title).to.equal(booksTitleFromPage[i])
    })
      
}
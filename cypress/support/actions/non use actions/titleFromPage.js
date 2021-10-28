

export const titleFromPage = () => {
        
    const booksTitleFromPage = [];

cy.get('.mr-2').as('booksTitleFromPage');
cy.get('@booksTitleFromPage').each(elem => {
    booksTitleFromPage.push(elem.text());
    })


console.log(booksTitleFromPage)

}
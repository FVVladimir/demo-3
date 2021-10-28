

export const authorFromPage = () => {
       
        
    const authorsNameFromPage = [];

    cy.get('.rt-td:last-child').prev().as('authorsNameFromPage');
    cy.get('@authorsNameFromPage').each(elem => {
        authorsNameFromPage.push(elem.text());
        })

        console.log(authorsNameFromPage)
    
    }
// import { btnAuth } from "../pageObject/booksPage"

import { booksPage } from '../pageObject/pageObjects'

export const checkSort = () => {
    const sortAuthorList = [];
    const notSortAuthorList = [];
    cy.get(booksPage.authorName).prev().each(elem => {
        notSortAuthorList.push(elem.text())
        notSortAuthorList.sort();
    })
    cy.get(booksPage.btnAuth).contains('Author').click()
    cy.get(booksPage.authorName).prev().each(elem => {
        sortAuthorList.push(elem.text())
    })
        cy.get(sortAuthorList).each((el , i) => {
        expect(el).to.equal(notSortAuthorList[i])
    })
}
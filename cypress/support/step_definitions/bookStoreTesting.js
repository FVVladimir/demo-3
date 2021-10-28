import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { getCellName } from "../actions/getCellName";
import { checkSearch } from "../actions/checkSearch";
import { checkSort } from "../actions/checkSort";
import { checkTitle } from "../actions/checkTitle";
import { checkAuthor } from "../actions/checkAuthor";

Given('User open book store page', () => {
    cy.visit('/')
})

When('User watch a table name', () => {
    getCellName();     
})
When('User watch the books name do request from server and compare it',  () => {    
   
    checkTitle();
})

When('User watch the author name do request from server and compare it', () => {    
  
    checkAuthor();
})

When('User sort books by author', () => {
    checkSort();
})

When('User test search field', () => {
    checkSearch();
})

Then('Test are successful',  () => {
    console.log('test are successful')
})
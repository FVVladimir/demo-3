import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from '../actions/visitPage'
import { fillSearchField } from '../actions/fillSearchField'
import { verifiSearch } from '../actions/verifiSearch'

Given('I visit on main page', () => {
    visitPage()
})

When('I type names book', () => {
    
    fillSearchField()
})

Then('In the main page should appear book', () => {

     verifiSearch()
})
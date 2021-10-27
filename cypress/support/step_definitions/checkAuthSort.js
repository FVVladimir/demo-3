import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from "../actions/visitPage";
import { checkSort } from "../actions/checkSort";


Given('I visit on main page', () => {
    visitPage();
})

Then('I click on button Author', () => {
    checkSort();
})
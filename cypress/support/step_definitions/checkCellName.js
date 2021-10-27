
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from "../actions/visitPage";
import { getCellName } from "../actions/getCellName"

Given('I visit on main page', () => {
    visitPage();
});

Then('I get cell name on page Books and compare it with name witch i expect', () => {
    getCellName();
})

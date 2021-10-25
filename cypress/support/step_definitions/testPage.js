
import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from '../actions/visitPage'
import { doRequest } from '../actions/doRequest'
import { getCellName } from '../actions/getTableName'

Given('I go to books page', () => {

      visitPage();

})

And('Do request', () => {

      doRequest();
})

And('I comparing cell name on page Books', () => {
      
      getCellName() 
})
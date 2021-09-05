// Support
import { USERNAME } from "../../support/data/users";
import { getExpectedSize } from "../../support/helpers/functions";

// Page objects
import welcomeScreen from "../../support/page-objects/welcome-screen";
import customerListScreen from "../../support/page-objects/customer-list-screen";

// Test data
import customersData from "../../fixtures/customers.json";
import customerDetailsScreen from "../../support/page-objects/customer-details-screen";

describe('Contact details screen tests', ()=> {

  beforeEach('Enters name and sees customers table', () =>{
    cy.visit('/')
    welcomeScreen.getInputField.type(USERNAME);
    welcomeScreen.getSubmitButton.click();
    customerListScreen.getTable.should('be.visible');
  });

  
  // Generate tests dynamically for every existing customer in fixtures/customers.json
  customersData.forEach(CUSTOMER => {
    it(`Verifies customer details and navigates back: ${CUSTOMER.name}`, () => {
      const EXPECTED_SIZE = getExpectedSize(CUSTOMER.employees)
      const CONTACT_INFO_REGEX = /[Contact:]\S[a-zA-Z].*@[a-z\.][a-z].*/

      customerListScreen.getCustomerNameLink.contains(CUSTOMER.name).click();
      customerDetailsScreen.getTitle.should('be.visible');
      customerDetailsScreen.getName
        .should('have.text', `Name: ${CUSTOMER.name}`)
      customerDetailsScreen.getNumberOfEmployees
        .should('have.text', `# of Employees: ${CUSTOMER.employees}`)
      customerDetailsScreen.getSize
        .should('have.text', `Size: ${EXPECTED_SIZE}`)
      customerDetailsScreen.getContactInfo.invoke('text')
        .should('match', CONTACT_INFO_REGEX)
      customerDetailsScreen.getBackToListButton().click();

      customerListScreen.getTable.should('be.visible');
    });
  });
});
// Support
import { USERNAME } from "../../support/data/users";
import { getExpectedSize } from "../../support/helpers/functions";

// Page objects
import welcomeScreen from "../../support/page-objects/welcome-screen";
import customerListScreen from "../../support/page-objects/customer-list-screen";

// Test data
import customersData from "../../fixtures/customers.json";

describe('Customer screen tests', ()=> {

  beforeEach('Enters name and sees customers table', () =>{
    cy.visit('/')
    welcomeScreen.getInputField.type(USERNAME);
    welcomeScreen.getSubmitButton.click();
  });

  it('Assert table headers', ()=> {
    const EXPECTED_HEADERS = ['Name', '# of Employees', 'Size']

    customerListScreen.getTable.should('be.visible')
    customerListScreen.getTableHeaders
      .should('have.length', EXPECTED_HEADERS.length)
      .each(($header, index) => {
        cy.wrap($header).should('have.text', EXPECTED_HEADERS[index])
      })
  });
  
  // Generate tests dynamically for every existing customer in fixtures/customers.json
  customersData.forEach(CUSTOMER => {
    it(`Assert table values for customer: ${CUSTOMER.name}`, ()=> {
      customerListScreen.getTable.should('be.visible');
      const EXPECTED_SIZE = getExpectedSize(CUSTOMER.employees)

      customerListScreen.getTableRows.within($rows => {
        cy.wrap($rows).contains(CUSTOMER.name).then(($row) => {
          cy.wrap($row).parentsUntil('tbody').within(() => {
            customerListScreen.getCustomerNameLink.should('have.text', CUSTOMER.name);
            customerListScreen.getNumberOfEmployees.should('have.text', CUSTOMER.employees)
            customerListScreen.getSize.should('have.text', EXPECTED_SIZE)
          })
        })
      })
    });
  });
});
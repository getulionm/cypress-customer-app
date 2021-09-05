import welcomeScreen from "../../support/page-objects/welcome-screen";
import headerComponent from "../../support/page-objects/header-component";
import customerListScreen from "../../support/page-objects/customer-list-screen";

describe('Welcome Screen tests', () => {
  beforeEach('Navigates to Welcome Screen', () => {
    cy.visit('/');
    welcomeScreen.getInstructionsText.should('be.visible')
    welcomeScreen.getInputField.should('be.visible')
    welcomeScreen.getSubmitButton.should('be.visible')
  })

  it('Not providing name triggers alert', () => {
    const EXPECTED_MESSAGE = 'Please provide your name'

    let actualMessage;
    cy.on('window:alert', alertText => actualMessage = alertText)
    welcomeScreen.getSubmitButton.click().then(() => {
      expect(actualMessage).to.equal(EXPECTED_MESSAGE)
    })

    welcomeScreen.getInstructionsText.should('be.visible')
    welcomeScreen.getInputField.should('be.visible')
    welcomeScreen.getSubmitButton.should('be.visible')
  })

  it('Providing name takes user to Customer List Screen', ()=> {
    const USERNAME = 'Test'
    const DATE = new Date().toDateString()
    const EXPECTED_INSTRUCTIONS = `Hi ${USERNAME}. It is now ${DATE} and here is our customer list. Click on each of them to view their contact details.`

    welcomeScreen.getInputField.type(USERNAME);
    welcomeScreen.getSubmitButton.click();
    headerComponent.getInstructionsText.should('have.text', EXPECTED_INSTRUCTIONS)

    customerListScreen.getTable.should('be.visible')
  });
})

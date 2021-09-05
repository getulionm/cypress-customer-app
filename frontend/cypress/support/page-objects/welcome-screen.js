class WelcomeScreen {
  get getInstructionsText() {
    return cy.contains('p', 'Please provide your name:');
  }
  get getInputField() {
    return cy.get('#name');
  }
  get getSubmitButton() {
    return cy.get('[type=button]');
  }
}
export default new WelcomeScreen();
class HeaderComponent {
  get getTitle() {
    return cy.get('h1');
  }
  get getInstructionsText() {
    return cy.get('div p');
  }
}
export default new HeaderComponent();
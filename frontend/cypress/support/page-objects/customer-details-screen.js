class CustomerDetails {
  get getTitle() {
    return cy.contains('b', 'Customer Details');
  }
  get getName() {
    return cy.contains('b', 'Name:').parent();
  }
  get getNumberOfEmployees() {
    return cy.contains('b', '# of Employees:').parent();
  }
  get getSize() {
    return cy.contains('b', 'Size:').parent();
  }
  get getContactInfo() {
    return cy.contains('b', 'Contact:').parent();
  }
  getBackToListButton() {
    return cy.get('[value="Back to the list"]')
  }
}
export default new CustomerDetails();
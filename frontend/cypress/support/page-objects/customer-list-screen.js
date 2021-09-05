class CustomerListScreen {
  get getTable() {
    return cy.get('table');
  }
  get getTableHeaders() {
    return cy.get('table>thead>tr>th');
  }
  get getTableRows() {
    return cy.get('table>tbody>tr');
  }
  get getCustomerNameLink() {
    return cy.get('td [href="#"]');
  }
  get getNumberOfEmployees() {
    return cy.get('td').eq(1);
  }
  get getSize() {
    return cy.get('td').eq(2);
  }
}
export default new CustomerListScreen();
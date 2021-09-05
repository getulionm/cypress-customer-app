// Support
import { USERNAME } from '../../support/data/users';

describe('Api tests', ()=> {
  describe('Body contains name', ()=> {
    beforeEach('Post and alias request', function() {
      cy.request({
        method: 'POST', 
        url: Cypress.env("api"), 
        headers: {
          'content-type' : 'application/json'
        },
        body: { name: USERNAME }
      }).as('validPost')
    });

    it('valid payload returns status code 200 (success)', () => {
      cy.get('@validPost').its('status').should('be.equal', 200)
    });

    it('valid payload returns name in response', () => {
      cy.get('@validPost').should(response => {
        expect(response.body).to.have.property('name');
        expect(response.body.name).to.equal(USERNAME)
      })
    });

    it('Schema test: response matches', () => {
      cy.get('@validPost').then((response) => {
        cy.validateSchema('post-schema', response);
      })
    });
  });
  
  describe('Body does not contain name', ()=> {
    beforeEach('Post and alias request', function() { 
      cy.request({
        method: 'POST', 
        url: Cypress.env("api"), 
        body: { }
      }).as('invalidPost')
    });

    it('response contains no name key', () => {
      cy.get('@invalidPost').should(response => {
        expect(response.body).to.not.have.property('name');
      })
    });
  });
});
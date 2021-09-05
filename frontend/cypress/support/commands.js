// Schema validation
import Ajv from 'ajv'

/**
 * Validates a response against a pre-defined schema
 * Schema exists in cypress/fixtures/schemas
 * @param {JSON} fixtureSchema A schema to assert against
 * @param {JSON} response Response returned by api request
 */
Cypress.Commands.add('validateSchema', (fixtureSchema, response) => {
  cy.fixture(fixtureSchema).then((schema) => {
    const ajv = new Ajv({allErrors: true,  verbose: true});
    const validate = ajv.compile(schema);
    const valid = validate(response.body);
    if (!valid) {
      throw new Error(`Schema validation error: ${JSON.stringify(validate.errors)}`)
    };
  });
});


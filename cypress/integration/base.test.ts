describe('visit page', () => {
  it('Visits the Kitchen Sink', () => {
    // @ts-expect-error - Cypress types not available in this test file
    cy.visit('/');
  });
});

describe('visit page', () => {
    it('Visits the Kitchen Sink', () => {
        // @ts-expect-error
        cy.visit('/');
    });
});

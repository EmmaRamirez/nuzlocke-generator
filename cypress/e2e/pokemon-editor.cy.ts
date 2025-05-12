/* ==== Test Created with Cypress Studio ==== */
it('Modify Pokemon', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:8080');
  cy.get(':nth-child(2) > :nth-child(1) > .bp5-html-select > select').select('Red');
  cy.get('.__cypress-selector-playground').click();
  cy.get('[data-testid="pokemon-editor"] > .bp5-intent-success').click();
  cy.get(':nth-child(2) > .autocomplete > [data-testid="autocomplete"]').click();
  cy.get('.autocomplete-items > :nth-child(1)').click();
  cy.get('.current-pokemon-text > input').clear('B');
  cy.get('.current-pokemon-text > input').type('Bulbo');
  cy.get('.current-pokemon-level > input').clear('1');
  cy.get('.current-pokemon-level > input').type('10');
  cy.get(':nth-child(3) > .autocomplete > [data-testid="autocomplete"]').click();
  cy.get('.autocomplete-items > :nth-child(1)').click();
  cy.get('.current-pokemon-metLevel > input').clear('5');
  cy.get('.current-pokemon-metLevel > input').type('5');
  cy.get('.current-pokemon > :nth-child(4)').click();
  cy.get('.current-pokemon-gender > .bp5-html-select > select').select('Male');
  cy.get('.current-pokemon-nature > .bp5-html-select > select').select('Quirky');
  cy.get(':nth-child(4) > .autocomplete > [data-testid="autocomplete"]').clear('O');
  cy.get(':nth-child(4) > .autocomplete > [data-testid="autocomplete"]').type('Overgrow');
  cy.get('.autocomplete-items > li').click();
  cy.get('.bp5-input-ghost').clear('T');
  cy.get('.bp5-input-ghost').type('Leech Seed{enter}');
  cy.get('.current-pokemon-more > .bp5-button-text').click();
  cy.get('.current-pokemon-shiny > .bp5-control').click();
  cy.get('.current-pokemon-shiny > .bp5-control > input').check();
  cy.get('.current-pokemon-pokeball > .bp5-html-select > select').select('Dive Ball');
  cy.get('.current-pokemon-pokeball > .bp5-html-select > select').select('Poke Ball');
  /* ==== End Cypress Studio ==== */
});

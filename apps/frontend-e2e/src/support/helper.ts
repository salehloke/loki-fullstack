export function findEl(testId: string): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(`#${testId}`);
}

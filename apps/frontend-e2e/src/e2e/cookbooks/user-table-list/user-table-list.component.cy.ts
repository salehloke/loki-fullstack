

describe('frontend', () => {
  beforeEach(() => cy.visit('#/user-list'));
  it('should render the component', () => {
    cy.get('loki-fullstack-user-table-list').should('exist');
  });
});

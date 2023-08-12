describe('frontend', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=firststepformcomponent--primary&args=stepFormGroup;'
    )
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-first-step-form').should('exist');
  });
});

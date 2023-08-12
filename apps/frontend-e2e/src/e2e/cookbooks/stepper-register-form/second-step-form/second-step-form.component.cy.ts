describe('frontend', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=secondstepformcomponent--primary&args=stepFormGroup;'
    )
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-second-step-form').should('exist');
  });
});

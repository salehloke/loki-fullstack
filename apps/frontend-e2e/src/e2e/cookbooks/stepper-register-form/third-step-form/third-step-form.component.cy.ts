describe('frontend', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=thirdstepformcomponent--primary&args=stepFormGroup;'
    )
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-third-step-form').should('exist');
  });
});

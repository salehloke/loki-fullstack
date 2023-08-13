describe('frontend', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=stepperregisterformcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-stepper-register-form').should('exist');

    cy.get('loki-fullstack-first-step-form').should('exist');
  });
});

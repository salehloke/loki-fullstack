describe('frontend', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=updateuserformcomponent--primary&args=id;registrationFormGroup;'
    )
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-update-user-form').should('exist');
  });
});

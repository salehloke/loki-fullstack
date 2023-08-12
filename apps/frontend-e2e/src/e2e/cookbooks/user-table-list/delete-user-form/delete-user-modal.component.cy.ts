describe('frontend', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=deleteusermodalcomponent--primary&args=country:delete+record!;id;'
    )
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-delete-user-modal').should('exist');
  });
});

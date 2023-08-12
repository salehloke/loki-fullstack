describe('frontend', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=updateusermodalcomponent--primary&args=id;')
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-update-user-modal').should('exist');
  });
});

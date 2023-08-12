describe('frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usertablelistcomponent--primary'));
  it('should render the component', () => {
    cy.get('loki-fullstack-user-table-list').should('exist');
  });
});

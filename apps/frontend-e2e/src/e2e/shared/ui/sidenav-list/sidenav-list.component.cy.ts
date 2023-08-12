describe('frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavlistcomponent--primary'));
  it('should render the component', () => {
    cy.get('loki-fullstack-sidenav-list').should('exist');
  });
});

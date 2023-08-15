describe('frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashboardcomponent--primary'));
  it('should render the component', () => {
    cy.get('loki-fullstack-dashboard').should('exist');

    cy.get('h1').should('contain', 'Dashboard');
  });
});

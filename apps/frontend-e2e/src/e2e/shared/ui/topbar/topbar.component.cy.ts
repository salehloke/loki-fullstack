describe('frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('loki-fullstack-topbar').should('exist');
  });
});

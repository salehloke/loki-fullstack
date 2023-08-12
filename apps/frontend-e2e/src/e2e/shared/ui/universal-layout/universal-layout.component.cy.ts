describe('frontend', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=universallayoutcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('loki-fullstack-universal-layout').should('exist');
  });
});

describe('Podcast App', () => {
  it('The user searchs and go to a podcast', () => {
    cy.visit('http://localhost:5173');
    cy.get('input').type('joe');
    cy.contains('Author:').click();
    cy.get('td[class~="font-medium"]:first').click();
    cy.get('audio').should('be.visible');
    cy.get('audio').should('have.attr', 'controls');
  })
})
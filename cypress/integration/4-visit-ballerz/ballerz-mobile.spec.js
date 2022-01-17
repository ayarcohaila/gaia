/// <reference types="cypress" />

describe('Viewport 320 - Collection Ballerz NFT', () => {
  context('Acessing Asset', () => {
    beforeEach(() => {
      cy.viewport(320, 878);
    });

    it('Visit Collection > Ballerz NFT', () => {
      cy.visit(`${Cypress.env('host')}/ballerz/36`);
    });

    it('Testing Breadcrumbs', () => {
      cy.get('li button').contains('Home');
      cy.get('li p').contains('Collections');
      cy.get('li button').contains('Ballerz NFTs');
      cy.get('li p').contains('BALLER #36');
    });

    it('Testing Content', () => {
      cy.get('[data-cy="asset-image"]').should('be.visible');
      cy.get('[data-cy="asset-title"]').should('be.visible');
      cy.get('[data-cy="asset-number"]').should('be.visible');
      cy.get('[data-cy="asset-description"]').should('be.visible');
    });

    it('Testing Properties', () => {
      cy.get('[data-cy="accordion-summary-Properties"]').should('be.visible');
    });
  });
});

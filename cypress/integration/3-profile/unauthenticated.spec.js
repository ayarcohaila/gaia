/// <reference types="cypress" />

const PROFILE_ADDRESS = '0x6ca073af1cbe4d22';

describe('Viewport 1440 - Profile Unauthenticated', () => {
  context('Acessing Unauthenticated Profile', () => {
    beforeEach(() => {
      cy.viewport(1440, 878);
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}/profile/${PROFILE_ADDRESS}`);
      cy.get('p').contains('My Account');
      cy.get('p').contains('0 owned');
      cy.get('p').contains('In Wallet:');
      cy.get('span').contains('There are no Flow NFTs in this wallet from any Gaia collections');
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="button-visit-marketplace"]').should('be.visible');
    });
  });
});

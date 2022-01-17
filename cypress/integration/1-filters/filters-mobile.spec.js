/// <reference types="cypress" />

describe('Marketplace - Filters', () => {
  context('Viewport 320px resolution', () => {
    beforeEach(() => {
      cy.viewport(320, 879);
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}`);
      cy.get('[data-cy="burger-button-mobile"]').click();
      cy.wait(1000);
      cy.get('[data-cy="link-Marketplace"]').click();
      cy.wait(2000);
    });

    describe('Input Range Filter', () => {
      it('Min and Max', () => {
        const min = '10000';
        const max = '10000';

        cy.get('[data-cy="button-filter-medium-device"]').click();
        cy.get('[name="min"]').should('have.length', 1);
        cy.get('[name="max"]').should('have.length', 1);

        cy.get('[name="min"]').type(`${min}{enter}`);
        cy.get('[name="max"]').type(`${max}{enter}`);

        cy.get('[name="min"]').should('have.value', min);
        cy.get('[name="max"]').should('have.value', max);
      });
    });

    describe('Single Filters', () => {
      it('Status - Click on View All', () => {
        cy.get('[data-cy="single-filter-viewAll"] input').check();
        cy.get('[data-cy="single-filter-viewAll"] input').should('be.checked');
      });

      it('Status - Click on Buy Now', () => {
        cy.get('[data-cy="single-filter-buyNow"] input').check();
        cy.get('[data-cy="single-filter-buyNow"] input').should('be.checked');
      });
    });

    describe('Multi Filters', () => {
      it('Collection - BALLERZ', () => {
        cy.get('[data-cy="multi-filter-BALLERZ"] input').check();
        cy.get('h4').contains('Ballerz Properties');
        cy.get('[data-cy="apply"]').click();
        cy.get('[data-cy="button-filter-medium-device"]').contains('Filters (2)');
      });
    });
  });
});

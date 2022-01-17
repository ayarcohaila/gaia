/// <reference types="cypress" />

describe('Marketplace - Filters', () => {
  context('Viewport 1024px resolution', () => {
    beforeEach(() => {
      cy.viewport(1440, 878);
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}`);
      cy.get('[data-cy="link-Marketplace"]').click();
    });

    describe('Input Range Filter', () => {
      it('Min and Max', () => {
        const min = '10000';
        const max = '10000';

        cy.get('[data-cy="filter-Price"]').click();
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
        cy.get('[data-cy="filter-Status"]').click();

        cy.get('[data-cy="single-filter-viewAll"] input').check();
        cy.get('[data-cy="single-filter-viewAll"] input').should('be.checked');

        cy.get('[data-cy="single-filter-buyNow"] input').check();
        cy.get('[data-cy="single-filter-buyNow"] input').should('be.checked');
      });
    });

    describe('Multi Filters', () => {
      it('Collection - BALLERZ', () => {
        cy.get('[data-cy="filter-Collection"]').click();

        cy.get('[data-cy="multi-filter-BALLERZ"] input').check();
        cy.get('h5').contains('Ballerz Properties');

        cy.get('[data-cy="filter-Ballerz Properties"]').click();

        cy.get('h5').contains('Team');
        cy.get('h5').contains('Number');
        cy.get('h5').contains('Role');
        cy.get('h5').contains('Body');
        cy.get('h5').contains('Hair');

        cy.get('[data-cy="filter-Team"]').click();
        cy.get('[data-cy="checkbox-card"]').should('be.visible');
      });
    });
  });
});

/// <reference types="cypress" />

const COLLECTION_IDS = {
  ballerz: 'ballerz',
  bryson: 'bryson',
  shareef: 'shareef'
};

describe('Intercepting Requests', () => {
  context('Filters', () => {
    beforeEach(() => {
      cy.viewport(1440, 878);
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}`);
      cy.get('[data-cy="link-Marketplace"]').click();
    });

    describe('Request - Range Filter', () => {
      it('Min and Max', () => {
        const min = '10000';
        const max = '10000';

        cy.get('[data-cy="accordion-summary-Price"]').click();

        cy.get('[name="min"]').should('have.length', 1);
        cy.get('[name="min"]').type(`${min}{enter}`);

        cy.intercept('POST', '/api/marketplace').as('filterReq');

        cy.wait('@filterReq').then(({ request }) => {
          expect(request.body.price).to.have.length(2);
          expect(request.body.price[0].last_active_price._gte).to.eq(10000);
          expect(request.body.price[1].last_active_price._lte).to.eq(2000000);

          expect(request.body.isForSale._eq).to.eq(true);
          expect(request.body.collections).to.be.an('array');

          cy.wrap(request.body)
            .its('collections')
            .should('not.be.empty')
            .then(list => Cypress._.map(list, 'collection_id._eq'))
            .should('include', Cypress.env(COLLECTION_IDS.ballerz))
            .should('include', Cypress.env(COLLECTION_IDS.bryson))
            .should('include', Cypress.env(COLLECTION_IDS.shareef));

          expect(request.body.properties._and).to.have.length(0);
          expect(request.body.offset).to.eq(0);
          expect(request.body.orderBy.last_active_price).to.eq('asc');
        });

        cy.get('[name="max"]').should('have.length', 1);
        cy.get('[name="max"]').type(`${max}{enter}`);

        cy.wait('@filterReq').then(({ request }) => {
          expect(request.body.price[1].last_active_price._lte).to.eq(10000);
        });
      });
    });

    describe('Request - View All', () => {
      it('Field View All', () => {
        cy.get('[data-cy="accordion-summary-Status"]').click();
        cy.get('[data-cy="single-filter-viewAll"] input').check();

        cy.intercept('POST', '/api/marketplace').as('filterReq');

        cy.wait('@filterReq').then(({ request }) => {
          expect(request.body.price).to.have.length(0);

          expect(request.body.isForSale._eq).to.eq(undefined);
          expect(request.body.collections).to.be.an('array');
          expect(request.body.properties._and).to.have.length(0);
          expect(request.body.offset).to.eq(0);
          expect(request.body.orderBy.last_active_price).to.eq('asc');

          cy.wrap(request.body)
            .its('collections')
            .should('not.be.empty')
            .then(list => Cypress._.map(list, 'collection_id._eq'))
            .should('include', Cypress.env(COLLECTION_IDS.ballerz))
            .should('include', Cypress.env(COLLECTION_IDS.bryson))
            .should('include', Cypress.env(COLLECTION_IDS.shareef));
        });
      });
    });
  });
});

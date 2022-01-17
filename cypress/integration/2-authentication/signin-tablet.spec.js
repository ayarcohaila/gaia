/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { fcl } from '../../../src/config/config';

describe('Viewport 768 - Authentication', () => {
  context('Signin', () => {
    beforeEach(() => {
      cy.viewport(768, 878);
      cy.stub(fcl, 'logIn');
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}`);
      cy.get('[data-cy="burger-button-mobile"]').click();
    });

    describe('Stub FCL functions', () => {
      it('Check FCL Window', () => {
        cy.window().then(win => {
          cy.spy(win, 'open').as('popup');
        });

        cy.get('[data-cy="login"]').click();

        expect(fcl.logIn).to.be.a('function');
        cy.get('@popup').should('be.called');
      });
    });
  });
});

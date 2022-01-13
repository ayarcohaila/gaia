/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { fcl } from '../../../src/config/config';

describe('Viewport 1440 - Authentication', () => {
  context('Signin', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.viewport(1440, 878);
      cy.stub(fcl, 'logIn');
    });

    it('Visit Marketplace', () => {
      cy.visit(`${Cypress.env('host')}`);
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

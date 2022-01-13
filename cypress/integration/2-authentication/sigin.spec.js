/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { fcl } from '../../../src/config/config';

describe('Authentication', () => {
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
        // cy.spy(fcl, 'logIn');
        // cy.fclIframeLoaded();
        // cy.frameLoaded({ url: '' });
        // cy.stub(fcl, 'logIn').returns('Log in with Google');
        // expect(fcl.logIn).to.be.called

        cy.window().then(win => {
          cy.spy(win, 'open', url => {
            win.location.href =
              'https://auth.staging.meetdapper.com/login?state=hKFo2SA1MFYzSGc4MnB4MU9TMWUzX2NwbGdjWjdPanlRODVLeqFupWxvZ2luo3RpZNkgQ2p2U3I4bS1BNEVUbmpkakttQkxhcEl5b1hMNS00bVSjY2lk2SBoRFFaamQ3b01CeUIwMGVmRjdBdUhHRTJxbEVRZUxPYw&client=hDQZjd7oMByB00efF7AuHGE2qlEQeLOc&protocol=oauth2&scope=openid profile email app.dapperlabs.com%2Ffcl_purchase.create app.dapperlabs.com%2Fuser.payment_methods app.dapperlabs.com%2Fuser app.dapperlabs.com%2Fpayments.read app.dapperlabs.com%2Fpayments.approve app.dapperlabs.com%2Fflow.transactions.read app.dapperlabs.com%2Fflow.transactions.approve app.dapperlabs.com%2Fdapper_credit_purchase.create app.dapperlabs.com%2Fwithdrawals.read app.dapperlabs.com%2Fwithdrawals.review app.dapperlabs.com%2Fwithdrawals.delete app.dapperlabs.com%2Fpurchase_intents.delete app.dapperlabs.com%2Ftoken_withdrawals.create&response_type=code&redirect_uri=https%3A%2F%2Fstaging.accounts.meetdapper.com%2Fapi%2Fcallback&audience=https%3A%2F%2Fapi.staging.app.dapperlabs.com&prompt=&prevent_sign_up=false&nonce=mBWBstvncZUeNuMLxZm2vteeAaDv5zpHbnZwKDZIVSM&code_challenge=vlCHQcMLZiK6znnMym6ZQgsUuHDr4OY8wueFVsIwa_E&code_challenge_method=S256';
          }).as('popup');
          cy.spy(win.document, 'querySelector').as('querySelector');
        });

        cy.get('[data-cy="login"]').click();

        cy.wait(8000);
        expect(fcl.logIn).to.be.a('function');
        cy.get('@popup').should('be.called');

        // cy.contains('Sign up with Google');
        cy.get('#email').should('be.visible').type('John Doe');
      });
    });
  });
});

/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation';

var token;

describe('cy request', () => {
    before('login throuhg BE', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login',
            body: {
                email: "danilo.todorovic@vivifyideas.com",
                password: "test1234"
            }
        }).its('body').then((body) => {
            window.localStorage.setItem('token', body.access_token);
            token = body.access_token;
        })
        // cy.loginBE(Cypress.env('validLoginEmail'), Cypress.env('validLoginPassword'));
    })

    it('visit main page', () => {
        cy.visit("/");
        navigation.loginButton.should('not.exist');
        cy.logout(token);
    })

})
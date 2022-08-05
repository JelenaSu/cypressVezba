/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');
import { navigation } from "../page_objects/navigation";

describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        cy.get(locators.header.loginButton).click();
    })
    
    it("Login with valid credentials and logout", () => {
        cy.get(locators.login.emailInput).type("danilo.todorovic@vivifyideas.com");
        cy.get(locators.login.passwordInput).type("test1234");
        cy.get(locators.login.submitButton).click();
        cy.wait(1000);
        cy.get(locators.header.logoutButton).click();
    })

    it("Login with invalid credentials", () => { 
        cy.visit("/");
        cy.get(locators.header.loginButton).click();
        cy.get(locators.login.emailInput).clear().type("test00@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("lest1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid email", () => {
        cy.get(locators.login.emailInput).clear().type("test00gmailcom");
        cy.get(locators.login.passwordInput).clear().type("test1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid password", () => {
        cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("00000");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with blank email", () => {
        cy.get(locators.login.emailInput).clear().type("{backspace}");
        cy.get(locators.login.passwordInput).clear().type("test1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with blank password", () => {
        cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("{backspace}");
        cy.get(locators.login.submitButton).click();
    });
})

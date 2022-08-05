/// <reference types="Cypress" />

import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        navigation.clickOnLoginButton();
    })
    
    it("Login with valid credentials and logout", () => {
        loginPage.login("danilo.todorovic@vivifyideas.com", "test1234")
        cy.wait(1000);
        navigation.clickOnLogoutButton()
    })

    it("Login with invalid credentials", () => { 
        cy.visit("/");
        navigation.clickOnLoginButton();
        loginPage.login(faker.internet.email(), "lest1235");
    });

    it("Login with invalid email", () => {
        loginPage.login(faker.internet.email(), "test1235")
    });

    it("Login with invalid password", () => {
        loginPage.login(faker.internet.email(), "00000")
    });

    it("Login with blank email", () => {
        loginPage.login("{backspace}", "test1235")
    });

    it("Login with blank password", () => {
        loginPage.login(faker.internet.email(), "{backspace}")
    });
})

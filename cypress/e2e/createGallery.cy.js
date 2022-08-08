/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { createGalleryPage } from '../page_objects/createGallery'

describe('create gallery', () => {
    it('positivna sam', () => {
        cy.visit('/');
        navigation.clickOnLoginButton();
        loginPage.login("danilo.todorovic@vivifyideas.com", "test1234");
        navigation.clickOnGalleryButton();
        createGalleryPage.createGallery('fadfaas', 'https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg');
    })
})
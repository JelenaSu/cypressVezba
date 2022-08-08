class Navigation {
    get loginButton() {
        return cy.get("a[href='/login']");
    }

    get logoutButton() {
        return cy.get("a[role='button ']");
    }

    get registrationButton() {
        return cy.get("a[href='/register']")
    }

    get createGalleryButton() {
        return cy.get("a[href='/create']")
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }

    clickOnLogoutButton() {
        this.logoutButton.click();
    }

    clickOnRegistrationButton() {
        this.registrationButton.click();
    }

    clickOnGalleryButton() {
        this.createGalleryButton.click();
    }
}

export const navigation = new Navigation();

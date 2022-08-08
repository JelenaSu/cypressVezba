class CreateGalleryPage {
    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get("#description");
    }
    
    get imageInput() {
        return cy.get('input[type="url"]');
    }

    get submitButton() {
        return cy.get('button[type="submit"]').first();
    }

    get cancelButton() {
        return cy.get('button[type="submit"]').last();
    }

    createGallery(title, imageUrl, description = "{backspace}") {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageInput.type(imageUrl);
        this.submitButton.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();

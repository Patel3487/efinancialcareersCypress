class DocumentPage {
    coverLetterTab() {
        return cy.contains('Create Cover Letter')
    }
    titleTab() {
        return cy.get('input#title')
    }
    contentTab() {
        return cy.get('textarea#content')
    }
    saveChangesTab() {
        return cy.contains('Save changes')
    }
    errorMessageSpan() {
        return cy.get('div.invalid-feedback >span')
    }

    createCoverLetter(title, content) {
        this.coverLetterTab().click()
        this.titleTab().type(title)
        this.contentTab().type(content)
        this.saveChangesTab().click()
    }

} export default DocumentPage
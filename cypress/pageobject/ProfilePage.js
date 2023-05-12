class ProfilePage {
    accountTab() {
        return cy.contains('Account')
    }
    documentsTab() {
        return cy.contains('Document Library')
    }

    goToDocumentLibrary() {
        this.accountTab().click({ force: true })
        this.documentsTab().click({ force: true })
    }


} export default ProfilePage
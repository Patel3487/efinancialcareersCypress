class CustomerPage {
    avatarTab() {
        return cy.get('div[aria-controls="dropdown-avatar"]')
    }
    myProfileTab() {
        return cy.contains('My Profile')
    }

    goToMyProfile() {
        this.avatarTab().click()
        this.myProfileTab().click({ force: true })
    }


} export default CustomerPage
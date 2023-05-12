class HomePage {

    loginTab() {
        return cy.get('button[data-gtm-trackable="login-register"]')
    }
    clickOnLoginTab() {
        this.loginTab().click({ force: true })
    }

} export default HomePage
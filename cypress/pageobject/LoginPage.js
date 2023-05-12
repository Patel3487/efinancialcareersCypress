class LoginPage {
    emailTab() {
        return cy.get('input[placeholder="Email"]')
    }
    continueBtn() {
        return cy.contains("Continue")
    }
    passwordTab() {
        return cy.get('input[placeholder="Password"]')
    }
    submitBtn() {
        return cy.contains("Submit")
    }

    enterEmail(email) {
        this.emailTab().clear()
        this.emailTab().type(email)
    }
    clickContinue() {
        this.continueBtn().click()
    }
    enterPassword(password) {
        this.passwordTab().clear()
        this.passwordTab().type(password)
    }
    clickSubmit() {
        this.submitBtn().click()
    }



} export default LoginPage
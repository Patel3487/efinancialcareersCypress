/// <reference types = "cypress"/>
import CustomerPage from '../pageobject/CustomerPage'
import DocumentPage from '../pageobject/DocumentPage'
import HomePage from '../pageobject/HomePage'
import LoginPage from '../pageobject/LoginPage'
import ProfilePage from '../pageobject/ProfilePage'
const homePage = new HomePage
const loginPage = new LoginPage
const customerPage = new CustomerPage
const profilePage = new ProfilePage
const documentPage = new DocumentPage

describe("efinancial login test", () => {
    const testData = require('../fixtures/dataProvider.json')

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
    })

    it("Security test", () => {
        cy.intercept('POST', 'https://cover-letter.efinancialcareers.com/v1/cover-letters',
            (req) => {
                req.body = {
                    jobseeker_id: testData.jobseekerId
                }
                req.continue((res) => {
                    expect(res.statusCode).to.equal(testData.errorCode)

                })
            }
        ).as('securityTest')

        homePage.clickOnLoginTab()
        loginPage.enterEmail(testData.email)
        loginPage.clickContinue()
        loginPage.enterPassword(testData.password)
        loginPage.clickSubmit()
        customerPage.goToMyProfile()
        profilePage.goToDocumentLibrary()
        documentPage.createCoverLetter(testData.title, testData.content)
        cy.wait('@securityTest')
        documentPage.errorMessageSpan().should('have.text', testData.errorMessage)

    })

})
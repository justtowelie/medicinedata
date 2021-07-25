/// <reference types="Cypress" />
import CompanyPage from "../pageObject/CompanyPage"
import HomePage from "../pageObject/HomePage"
const companyPage = new CompanyPage
const homePage = new HomePage

  beforeEach(function(){
    cy.writeFile('companydata.json', '')
    cy.visit(Cypress.env('url'))
})

describe('Grab information on 1, 3 and last company', () => {
    it('obtain the data', () => {
        cy.get('#onetrust-accept-btn-handler').click()
        homePage.selectLeftOrRight();
        homePage.clickBAndExtract();
        homePage.clickCAndExtract();
        homePage.clickDAndExtract();
        homePage.clickEAndExtract();
        homePage.clickFAndExtract();
        homePage.clickGAndExtract();
        homePage.clickHAndExtract();
        homePage.clickIAndExtract();
        homePage.clickJAndExtract();
        homePage.clickKAndExtract();
        homePage.clickLAndExtract();
        homePage.clickMAndExtract();
        homePage.clickNAndExtract();
        homePage.clickOAndExtract();
        homePage.clickPAndExtract();
        homePage.clickQAndExtract();
        homePage.clickRAndExtract();
        homePage.clickSAndExtract();
        homePage.clickTAndExtract();
        homePage.clickUAndExtract();
        homePage.clickVAndExtract();
        homePage.clickWAndExtract();
        homePage.clickZAndExtract();
    })
})

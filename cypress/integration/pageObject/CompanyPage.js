import '../../support/commands';

class CompanyPage {
    constructor() {
        this.COMPANY_NAME = "h1";
        this.ADDRESS = ".col-md-5 > .gfdCompanyDetailsCol > :nth-child(2) > p";
        this.TELEPHONE = ".col-md-5 > .gfdCompanyDetailsCol > :nth-child(4) > p";
        this.FAX = ".col-md-5 > .gfdCompanyDetailsCol > :nth-child(4) > p";
        this.DIRECT_LINE = ".col-md-4 > .gfdCompanyDetailsCol > :nth-child(4) > p";
        this.EMAIL = ".col-md-5 > .gfdCompanyDetailsCol > :nth-child(6) > p";
        this.OUT_OF_HOURS_NUMBER = ".col-md-4 > .gfdCompanyDetailsCol > :nth-child(6) > p";
    }

    async obtainDataInTable(){
        cy.get(this.COMPANY_NAME).then(($p) => {
            const company = $p.text();
        cy.get('.company-details').then(($p) =>{
            // changes all groups of white spaces characters to single space then trim to remove all exceeding white spaces
            const companyInfo = $p.text().replace(/\s+/g, ' ').trim();
            const logoFilePath = 'cypress/screenshotsFolder/' + company;
            cy.get('.img-responsive').screenshot(logoFilePath)
            let companyArray = {logoFilePath, companyInfo}
            cy.writeFile('companydata.json', companyArray, {flag: 'a+'})
        })
    })
    }


    async getCompany() {
        cy.get(this.COMPANY_NAME).then(($p) => {
            const company = $p.text();
        })
    }

    async getAddress() {
        cy.get(this.ADDRESS).then(($p) => {
            const address = $p.text();
            cy.log(address)
        })
    }

    async getTelephone() {
        cy.get(this.TELEPHONE).then(($p) => {
            const telephone = $p.text();
            cy.log(telephone)
        })
    }

    async getFax() {
        cy.get(this.FAX).then(($p) => {
            const fax = $p.text();
            cy.log(fax)
        })
    }

    async getDirectLine() {
        cy.get(this.DIRECT_LINE).then(($p) => {
            const directline = $p.text();
            cy.log(directline)
        })
    }

    async getEmail() {
        cy.get(this.EMAIL).then(($p) => {
            const email = $p.text();
            cy.log(email)
        })
    }

    async getOutOfHoursNumber() {
        cy.get(this.OUT_OF_HOURS_NUMBER).then(($p) => {
            const oohNumber = $p.text();
            cy.log(oohNumber)
        })
    }
}

export default CompanyPage
import CompanyPage from "./CompanyPage";
class HomePage{
    constructor(){
        this.LEFT_LIST = ".ieleft > ul";
        this.RIGHT_LIST = ".ieright > ul";
        this.B_PAGE = ".browse > :nth-child(3) > a";
        this.C_PAGE = ".browse > :nth-child(4) > a";
        this.D_PAGE = ".browse > :nth-child(5) > a";
        this.E_PAGE = ".browse > :nth-child(6) > a";
        this.F_PAGE = ".browse > :nth-child(7) > a";
        this.G_PAGE = ".browse > :nth-child(8) > a";
        this.H_PAGE = ".browse > :nth-child(9) > a";
        this.I_PAGE = ".browse > :nth-child(10) > a";
        this.J_PAGE = ".browse > :nth-child(11) > a";
        this.K_PAGE = ".browse > :nth-child(12) > a";
        this.L_PAGE = ".browse > :nth-child(13) > a";
        this.M_PAGE = ".browse > :nth-child(14) > a";
        this.N_PAGE = ".browse > :nth-child(15) > a";
        this.O_PAGE = ".browse > :nth-child(16) > a";
        this.P_PAGE = ".browse > :nth-child(17) > a";
        this.Q_PAGE = ".browse > :nth-child(18) > a";
        this.R_PAGE = ".browse > :nth-child(19) > a";
        this.S_PAGE = ".browse > :nth-child(20) > a";
        this.T_PAGE = ".browse > :nth-child(21) > a";
        this.U_PAGE = ".browse > :nth-child(22) > a";
        this.V_PAGE = ".browse > :nth-child(23) > a";
        this.W_PAGE = ".browse > :nth-child(24) > a";
        this.Z_PAGE = ".browse > :nth-child(27) > a";
    }

    async selectLeftOrRight() {
        const companyPage = new CompanyPage
            // let rightLength = cy.get('.ieright > ul > li').its('length').then(length => {
            //     length = rightLength
            // })
            let leftLength = cy.get('.ieleft > ul > li').its('length').then(length =>{
                length = leftLength
            })

        
            leftLength.then(length => {
                if(Cypress.$('ieleft > ul > li').length === 1)
                {
                    cy.get('.ieleft > ul > li > .key').first().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                }
                else if(Cypress.$('.ieright > ul > li').length >= 1 & Cypress.$('.ieleft > ul > li').length >= 3) {
                    cy.get('.ieleft > ul > :nth-child(1) > .key').click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                    cy.get('.ieleft > ul > :nth-child(3) > .key').click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                    cy.get('.ieright > ul > li >.key').last().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                } 
                 else if(Cypress.$('.ieleft > ul > li').length < 3 & Cypress.$('.ieright > ul > li').length > 0 ) {
                    cy.get('.ieleft > ul > li > .key').first().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                    cy.get('.ieright > ul > li >.key').last().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                } else if(Cypress.$('ieleft > ul > li').length === 1 & Cypress.$('ieright > ul > li').length === 1){
                    cy.get('.ieleft > ul > li > .key').first().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                    cy.get('.ieright > ul > li >.key').last().click()
                    companyPage.obtainDataInTable();
                    cy.go('back')
                }     
                })
                // let pages = Cypress.$('.browse > li > a').length.then(() => {
                // cy.get('.browse > li').each((item) => {
                //     const link = item.find('a').first();
                //     cy.get(link).click();
                //     this.selectLeftOrRight()
                //   });

                // let i = 3
                // if(i <= pages){
                //     cy.get(`.browse > :nth-child(${i}) > a`).click()
                //     this.selectLeftOrRight()
                // }

                // for ( let i = 3; i <= pages; i+=1){
                //     cy.get(`.browse > :nth-child(${i}) > a`).click()
                //     this.selectLeftOrRight()
                // }
        // })
    }

    async clickBAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.B_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickCAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.C_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickDAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.D_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickEAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.E_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickFAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.F_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickGAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.G_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickHAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.H_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickIAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.I_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickJAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.J_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickKAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.K_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickLAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.L_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickMAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.M_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickNAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.N_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickOAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.O_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickPAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.P_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickQAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.Q_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickRAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.R_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickSAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.S_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickTAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.T_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickUAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.U_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickVAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.V_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieleft > ul > :nth-child(3) > .key').click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickWAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.W_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
        cy.go('back')
    }

    async clickZAndExtract(){
        const companyPage = new CompanyPage
        cy.get(this.Z_PAGE).click()
        cy.get('.ieleft > ul > li > .key').first().click()
        companyPage.obtainDataInTable();
        cy.go('back')
        cy.get('.ieright > ul > li >.key').last().click()
        companyPage.obtainDataInTable();
    }
}


export default HomePage
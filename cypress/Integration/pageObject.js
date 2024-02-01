const data = require('../fixtures/login.json')
class meMarket
{
    visitUrl(){
        cy.visit('https://www.memarketplace.io')
    }
    clickLogin(){
        cy.get('div.css-k008qs .css-1ucjyb7').click()
    }
    enterUserName(){
        cy.get('input[placeholder="your@email.com"]').type(data.userName)
    }
    enterPassword(){
        cy.get('input[placeholder="Password"]').type(data.password)
    }
    clickLoginButton(){
        cy.get('button[type="submit"]').click()
    }
    clickProceed(){
        cy.get('.css-191mbxo').click()
    }

}
export default meMarket
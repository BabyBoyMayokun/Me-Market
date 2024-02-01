///<reference types='Cypress'/>

import meMarket from "../pageObject"

const data =require('../../fixtures/login.json')


describe('Testing Login Functionality',()=>{
    it('Full Login',()=>{
    const MeMarket=new meMarket

    MeMarket.visitUrl()
    MeMarket.clickLogin()
    MeMarket.enterUserName()
    MeMarket.enterPassword()
    MeMarket.clickLoginButton()
    MeMarket.clickProceed()
    })
})
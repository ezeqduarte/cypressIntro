/// <reference types="cypress"/>
require('cypress-plugin-tab')
require("cypress-xpath");


describe("Check uno", () => {
    it("Checks generales", () => {
        cy.visit("https://ezeqduarte.github.io/amazing-events/");
        cy.title().should('eq', "Home");
        cy.get("[type='checkbox']").check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck({force: true}).should('not.be.checked')
      })

    it("Checks por seleccion", () => {
        cy.visit("https://ezeqduarte.github.io/amazing-events/");
        cy.title().should('eq', "Home");
        cy.xpath("//*[@id='box_checksbox']/label[8]/input").check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.xpath("//*[@id='box_checksbox']/label[8]/input").uncheck({force: true}).should('not.be.checked')
      })
})

//Para los checkbox de tipo radio button, la funcionalidad es la misma utilizando check o uncheck, tambien se puede utilizar click()
  
  
  
/// <reference types="cypress"/>
require('cypress-plugin-tab')


describe("Selectors", () => {
    it("Selectors by ID", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', "DEMOQA");
        cy.log("Validacion de titulo")
        cy.wait(2000)
        cy.get("#userName").should("be.visible").type("Ezequiel")
        cy.wait(2000)
        cy.get("#userEmail").should("be.visible").type("Duarte")
        cy.wait(2000)
        cy.get("#currentAddress").should("be.visible").type("Las jaripas 2410")
        cy.wait(2000)

      })

      it.only("Selectors by ATTRIBUTE", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', "DEMOQA");
        cy.log("Validacion de titulo")
        cy.wait(2000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Ezequiel")
        cy.wait(2000)

      })
  })
  
  
  
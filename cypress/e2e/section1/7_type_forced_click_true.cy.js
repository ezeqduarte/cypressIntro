/// <reference types="cypress"/>
require('cypress-plugin-tab')


describe("Opciones de click", () => {
    it("Click sencillo", () => {
        
      cy.visit("https://testingqarvn.com.es/datos-personales")
      cy.title().should('eq', "Datos Personales | TestingQaRvn")
      cy.log("Pagina validada mediante su title")
      cy.wait(2000)
      cy.get("#wsf-1-field-21").click()
      cy.wait(2000)
      cy.get("#wsf-1-field-22").click()
      cy.wait(2000)
      cy.get("#wsf-1-field-23").click()
      cy.wait(2000)
      cy.get("#wsf-1-field-24").click()
      cy.wait(2000)
      cy.get("#wsf-1-field-28").click()
      cy.wait(2000)
      cy.get("#wsf-1-field-27").click({force:true})
      cy.wait(4000)
      })
  })
  
  
  
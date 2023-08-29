/// <reference types="cypress"/>
require('cypress-plugin-tab')


describe("Opciones de click", () => {
    it("Click sencillo", () => {
        
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq', "Datos Personales | TestingQaRvn")
        cy.log("Pagina validada mediante su title")
        cy.wait(1500)
        cy.get("#wsf-1-field-27").should("be.visible").click()
        cy.log("Boton enviar clickeado")
        cy.wait(1500)
        cy.get("#main-header > div.container.clearfix.et_menu_container > div.logo_container > a").should("be.visible").click()
        cy.log("Boton de redireccionar clickeado")
        cy.wait(1500)
       
      })
  })
  
  
  
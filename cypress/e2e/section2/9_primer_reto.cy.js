/// <reference types="cypress"/>
require('cypress-plugin-tab')


describe("Primer retro", () => {
    it("Caso1: Primer retro", () => {
        cy.visit("https://testingqarvn.com.es/combobox/");
        cy.title().should("eq", "ComboBox | TestingQaRvn");
        cy.log("Validacion de titulo")
        cy.wait(1500)
        cy.get("#wsf-1-field-45").type("Ezequiel").tab().type("Duarte").tab().type("ed@correo.com").tab().type("+5491234581230").tab().type("Las Heras 400")
        cy.log("Relleno datos")
        cy.wait(1500)
        cy.get("#wsf-1-field-49").clear().type("Los Herasmos 5010")
        cy.wait(1500)
        cy.get("#wsf-1-label-50-row-3").click()
        cy.log("Primer checkbox clickeado")
        cy.wait(1500)
        cy.get("#wsf-1-label-51-row-1").click()
        cy.log("segundo checkbox clickeado")
        cy.wait(1500)
        cy.get("#wsf-1-field-52").should("be.visible").click()
        cy.log("Formulario enviado")
        cy.wait(1500)
      })
  })
  
  
  
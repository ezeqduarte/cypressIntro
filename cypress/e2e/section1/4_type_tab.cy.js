/// <reference types="cypress"/>
require('cypress-plugin-tab')

describe("Ejemplo de funcion tab", () => {
    it("Type con tab", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.get("#wsf-1-field-21").type("Ezequiel").tab().type("Duarte").tab().type("ezequiel@correo.com").tab().type("+5493769126489").tab().type("La chacarita 400").tab().click()
        cy.log("Todos los tipes y tabs funcionaron correctamente")
      })
  })
  
  
  
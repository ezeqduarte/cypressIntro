/// <reference types="cypress"/>

describe("Introduccion a los Asserts ", () => {
    it("Demo de los asserts", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales")
        //assert be.visible para saber si el campo es visible
        cy.get("#wsf-1-field-21").should("be.visible").type("Juancito")
        cy.log("Campo nombre visible")
        //assert be.visible para saber si el campo es visible
        cy.get("#wsf-1-field-22").should("be.visible").type("Perez")
        cy.log("Campo apellido visible")
        //assert be.visible para saber si el campo es visible y ademas assert concatenado para saber si esta habilitado
        cy.get("#wsf-1-field-23").should("be.visible").should("be.enabled").type("juancitop@correo.com")
        cy.log("Campo apellido visible")
      })
  })
  
  
  
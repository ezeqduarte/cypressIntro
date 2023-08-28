//para que funcionen los comandos en cypress
/// <reference types="cypress"/>

describe("Seccion 2 Functions para type enter", () => {
    it("Type 1", () => {
        cy.visit("https://www.google.com.ar/")
        cy.title().should('eq', "Google")
        cy.log('La funcion title funciono correctamente')
        cy.get("#APjFqb").type("cypress io")
        cy.log('El tipeo funciono correctamente')
        cy.wait(1500)
      })

      it.only("Type 2: only this test", () => {
        cy.visit("https://www.google.com.ar/")
        cy.title().should('eq', "Google")
        cy.log('La funcion title funciono correctamente')
        cy.get("#APjFqb").type("river plate")
        cy.log('El tipeo funciono correctamente')
        cy.wait(1500)
      })

      it("Type 3", () => {
        cy.visit("https://www.google.com.ar/")
        cy.title().should('eq', "Google")
        cy.log('La funcion title funciono correctamente')
        cy.get("#APjFqb").type("la scaloneta")
        cy.log('El tipeo funciono correctamente')
        cy.wait(1500)
      })
  })

  
  
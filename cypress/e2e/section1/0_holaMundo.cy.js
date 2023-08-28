/// <reference types="cypress"/>

describe("Mi primer test con Cypress", () => {
  it("Mi primer test => hola mundo", () => {
      //console log
      cy.log("Hola mundo")
      //comando para esperar en milisegundos
      cy.wait(2000)
      //visita el sitio
      cy.visit("https://testingqarvn.com.es/datos-personales")
      cy.wait(2000)
      //.get encuentra el elemento por su id y .type tipea un valor dentro del componente
      cy.get("#wsf-1-field-21").type("Enzo")
      cy.wait(2000)
      cy.get("#wsf-1-field-22").type("Perez")
      cy.wait(2000)
      cy.get("#wsf-1-field-23").type("enzoperez@gmail.com")
      cy.wait(2000)
      cy.get("#wsf-1-field-24").type("+5491234568795")
      cy.wait(2000)
      cy.get("#wsf-1-field-28").type("El monumental es la direccion")
      cy.wait(2000)
      //click realizar la accion clickear al componente
      cy.get("#wsf-1-field-27").click()
      cy.wait(4000)
    })
})



/* https://testingqarvn.com.es/ */
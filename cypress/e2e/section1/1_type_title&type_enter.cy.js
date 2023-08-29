//para que funcionen los comandos en cypress
/// <reference types="cypress"/>

describe("Seccion 2 Functions para type enter", () => {
    it("Type enter", () => {
        cy.visit("https://www.google.com.ar/")
        //siempre el should con comillas simples y luego dobles
        cy.title().should('eq', "Google")
        cy.wait(1500)
        cy.log('La funcion title funciono correctamente')
        //encuentro el elemento con dicho ID, luego tipea dentro de el cypress io y al finalizar presiona enter
        cy.get("#APjFqb").type("cypress io {enter}")
        cy.wait(1500)
        cy.get("#tads > div:nth-child(3) > div > div > div > div.v5yQqb > a > div.CCgQ5.vCa9Yd.QfkTvb.N8QANc.MUxGbd.v0nnCb > span").click()


      })
  })
  
/* https://demoqa.com/text-box */
/* https://testingqarvn.com.es/datos-personales */
  
  
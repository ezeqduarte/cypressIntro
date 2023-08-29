/// <reference types="cypress"/>
require('cypress-plugin-tab')
require("cypress-xpath");


describe("Segundo reto", () => {
    it("Reto", () => {
        //validando pagina
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq', "Computers database")
        //buscando contenido con contenido erroneo
        cy.xpath("//input[contains(@id, 'searchbox')]").should("be.visible").type("Mac IOS")
        cy.xpath("//input[contains(@id, 'searchbox')]").clear()
        //buscando contenido con contenido correcto
        cy.xpath("//input[contains(@id, 'searchbox')]").should("be.visible").type("Mac Mini")
        cy.get("#searchsubmit").should("be.visible").click()
        //agregando contenido
        cy.xpath("//*[@id='add']").should("be.visible").click({force: true})
        //rellenando formulario
        cy.get("#name").should("be.visible").type('Nueva computadora').tab().type('2023-03-14').tab().type('2025-11-24')
        cy.get("#company").should("be.visible").select('Nokia').should('have.value', '16')
        //enviando formulario
        cy.xpath('//*[@id="main"]/form/div/input').should('be.visible').click()
        //buscando contenido agregado recientemente
        cy.xpath("//input[contains(@id, 'searchbox')]").should("be.visible").type("Nueva computadora")
        cy.get("#searchsubmit").should("be.visible").click()
      })
  })
  
  
  
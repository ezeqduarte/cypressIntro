/// <reference types="cypress"/>

describe("Type pageUp ", () => {

    it("Test using pageDown", () => {
        cy.visit("https://ezequiel-duarte.vercel.app/")
        //siempre el should con comillas simples y luego dobles
        cy.title().should('eq', "Portfolio | Ezequiel duarte")
        cy.wait(1500)
        cy.get("#Inicio > div > div.last-div-home > a").type("{pagedown}")
      })

      it("Test using pageup", () => {
        cy.visit("https://ezequiel-duarte.vercel.app/")
        //siempre el should con comillas simples y luego dobles
        cy.title().should('eq', "Portfolio | Ezequiel duarte")
        cy.wait(1500)
        cy.get("#Inicio > div > div.last-div-home > a").type("{pageup}")
      })
     
  })
  
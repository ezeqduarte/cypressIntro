/// <reference types="cypress"/>
require('cypress-plugin-tab')
require("cypress-xpath");


describe("Selects", () => {
    it("Selects uno", () => {
        cy.visit("https://my-tinerary-kingcatwo.vercel.app/hotels");
        cy.title().should('eq', "My-Tinerary");
        cy.xpath("//*[@id='cities']/form/fieldset[2]/select").should('be.visible').select('High Capacity').should('have.value', 'desc')
      })

      it("Selects dos", () => {
        cy.visit("https://www.google.com.ar/");
        cy.title().should('eq', "Google");
        cy.wait(2500);
        cy.get('#APjFqb').type('River Plate').type("{enter}")
        cy.xpath("//*[@id='bqHHPb']/div/div/div[1]/a[1]/div").click()
      })

      
      //test funciona, conseguir pagina con multiples selects para poder realizarlo.
      it("Selects multiples", () => {
        cy.visit("https://demo.mobiscroll.com/select/multiple-select");
        cy.title().should('eq', "Select Multiple select Example | Mobiscroll");
        cy.get('#input-picker-input').should('be.visible').select(['Books', 'Home, Garden & Tools'])
      })

      it.only("Selects con promesa", () => {
        cy.visit("https://www.google.com.ar/");
        cy.title().should('eq', "Google");
        cy.wait(2500);
        cy.get('#APjFqb').type('River Plate').type("{enter}").then(()=>{
          cy.xpath("//*[@id='bqHHPb']/div/div/div[1]/a[1]/div").click()
        })
      })
      
})

  
  
  
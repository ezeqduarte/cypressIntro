/// <reference types="cypress"/>
require('cypress-plugin-tab')
require("cypress-xpath");


describe("Asserts", () => {
    it("Asserts: contains()", () => {
        cy.visit("https://lapaginamillonaria.com/");
        cy.get("nav > ul > li > a").should('be.visible').contains("FIXTURE").click({force: true})
      })

      it.only("Asserts: find()", () => {
        cy.visit("https://www.google.com.ar/search?q=machester+united+informacion&sca_esv=561082500&sxsrf=AB5stBhPWVjNAhofPfANR1Hp78Sv_yGQyg%3A1693339639084&ei=90_uZJ3gBOHV1sQP7MaIsA0&ved=0ahUKEwjdt6_d1YKBAxXhqpUCHWwjAtYQ4dUDCA8&uact=5&oq=machester+united+informacion&gs_lp=Egxnd3Mtd2l6LXNlcnAiHG1hY2hlc3RlciB1bml0ZWQgaW5mb3JtYWNpb24yBxAAGA0YgARI1CZQxwZYvSVwB3gBkAEAmAFyoAHVF6oBBDI1Lje4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIHECMYigUYJ8ICBxAAGIoFGEPCAggQLhiABBixA8ICBRAuGIAEwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICBxAuGIoFGEPCAg0QABiKBRixAxiDARhDwgIKEC4YigUYsQMYQ8ICChAAGIoFGLEDGEPCAg0QLhiKBRjHARjRAxhDwgILEC4YigUYsQMYgwHCAhYQLhiKBRhDGJcFGNwEGN4EGOAE2AEBwgIHEC4YgAQYCsICChAuGLEDGIAEGArCAgkQABiKBRgKGEPCAgoQLhixAxiKBRhDwgIZEC4YsQMYigUYQxiXBRjcBBjeBBjgBNgBAcICChAAGIAEGLEDGArCAgcQABiABBgKwgIHEC4YDRiABMICBhAAGB4YDcICCBAAGB4YDRgKwgIGEAAYFhgewgIWEC4YDRiABBiXBRjcBBjeBBjgBNgBAcICChAuGA0YsQMYgATCAgoQABgNGIAEGLEDwgINEAAYigUYDRixAxiDAcICDRAAGA0YgAQYsQMYgwHCAhkQLhgNGLEDGIAEGJcFGNwEGN4EGOAE2AEBwgILEAAYigUYsQMYgwHCAg0QABiABBixAxiDARgKwgIIEAAYFhgeGA_CAggQABgIGB4YDeIDBBgAIEGIBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp");
        cy.get(".Wt5Tfe").find("[jsname='yEVEwb']").eq(0).click()
      })
      
      it.only("Asserts: validando estado nuevo", () => {
        cy.visit("https://www.mercadolibre.com.ar/mando-inalambrico-para-consola-de-juegos-color-negro-compatible-con-ps4/p/MLA21212921#reco_item_pos=0&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=6e5a9fb0-5bba-4362-b624-44c296e7f490");
        cy.get(".Wt5Tfe").find("[jsname='yEVEwb']").eq(0).click()
      })
      



})

  
  
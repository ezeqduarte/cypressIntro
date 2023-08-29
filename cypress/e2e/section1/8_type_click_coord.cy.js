/// <reference types="cypress"/>
require("cypress-plugin-tab");

describe("Opciones de click", () => {
  it("Click en coordenadas 20 20", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales");
    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.log("Pagina validada mediante su title");
    cy.wait(2000);
    cy.get("#wsf-1-field-24").should("be.visible").click(20, 20);
    cy.log("Button clickeado en coordenadas 20,20");
    cy.wait(4000);
    cy.log("Button clickeado en coordenadas 880,120");
    cy.get("#wsf-1-field-24").should("be.visible").click(520, 10);
    cy.wait(4000);
  });
});

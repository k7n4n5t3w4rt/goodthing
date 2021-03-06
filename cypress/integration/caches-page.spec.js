/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000/this/is/a/test/of/the/cache/script");
  });
  afterEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  // https://on.cypress.io/interacting-with-elements

  it("Route /this/is/a/test/of/the/cache/script | Renders ok", () => {
    cy.get("h1[data-cy=heading]").should("contain", "No build step");
    cy.get("h2[data-cy=subheading]").should("contain", "No script tags");
  });
  it("Route /this/is/a/test/of/the/cache/script | Plus and minus work ok", () => {
    cy.get("h2[data-cy=number-display]").should("contain", "6");
    cy.get("button[data-cy=plus]").click();
    cy.get("button[data-cy=plus]").click();
    cy.get("button[data-cy=plus]").click();
    cy.get("h2[data-cy=number-display]").should("contain", "9");
    cy.get("button[data-cy=minus]").click();
    cy.get("button[data-cy=minus]").click();
    cy.get("button[data-cy=minus]").click();
    cy.get("h2[data-cy=number-display]").should("contain", "6");
  });
});

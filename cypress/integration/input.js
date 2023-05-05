/// <reference types="cypress" />

describe("E2E - Input Actions", () => {
    it("Typing value in the field - automationpractice", () => {
        cy.visit("/")
        cy.get("#search_query_top").type("Produkt{backspace}", {delay: 500})
    })

    it("Clearing field - automationpractice", () => {
        cy.get("#search_query_top").clear();
    })
})
/// <reference types="cypress" />

describe("E2E - Click Actions", () => {
    it("Clicking on element - automationpractice", () => {
        cy.visit("/")

        cy.contains('[title="Contact us"]', 'Contact us').click();
        cy.get('[title="Return to Home"]').click();
    })
})
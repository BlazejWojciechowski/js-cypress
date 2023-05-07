/// <reference types="cypress" />

describe("E2E - Api tests", () => {
    it("Verification of Api tags - automationpractice", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("TagRequest");
        cy.visit("https://angular.realworld.io/")
        cy.wait("@TagRequest")
        cy.get("@TagRequest").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("Welcome").and.to.contain("implementations")
        })
    })

    
})
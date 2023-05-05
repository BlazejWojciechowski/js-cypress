/// <reference types="cypress" />

describe("E2E - Invoke Method", () => {
    it("Invoke - automationpractice", () => {
        cy.visit("/")

        //Get value from element
        cy.get('[title="Contact us"]').invoke("text").then(text =>{
            cy.log(text)
        })

        //Access point to attribute value
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get('[title="Contact us"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })

        //Get value
        cy.get('#search_query_top').type("Test value").invoke("prop", "checked").then(value => {
            cy.log(value)
        })
    })
})
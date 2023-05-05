/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Should open home page - automationpractice", () => {
        cy.visit("/")
    
        //ByTagname
        cy.get("a");

        //ById
        cy.get("#search_query_top")

        //ByClass
        cy.get(".form-control")

        //ByAttribute
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //ByAttribute
        cy.get('input[placeholder="Search"]')

        //ByFewAttribute
        cy.get('[src="http://automationpractice.pl/img/logo.jpg"][height="99"]')
    })

    it.only("Locators part 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })
})
/// <reference types="cypress" />

describe("E2E - Actions with select", () => {
    it("Select - automationpractice", () => {
        cy.visit("/index.php?id_category=3&controller=category") 

        //ByName
        cy.get("#selectProductSort").select("In stock")

        //ByValue
        cy.get("#selectProductSort").select("price:asc")

        //ByIndex
        cy.get("#selectProductSort").select(7)
   })

   it.only("Choosing all options", () => {
        cy.visit("/index.php?id_category=3&controller=category")

        cy.get("#selectProductSort").then(select => {
            cy.wrap(select).find("option").each(opt => {
                cy.wrap(select).select(opt.text())
            })
        })
   })
})

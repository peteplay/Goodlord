import { should } from 'chai'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
/// <reference types="Cypress" />

Given('I have navigated to the homepage', () => {
    cy.visit('/')
})

Given('I have accepted the cookies', () => {
    cy.get('#hs-eu-confirmation-button').click()

})

Then('I can see the company logo', () => {
    cy.get('#nav-logo').should('be.visible')
})

Then('I can see the Book a Demo button', () => {
    cy.get('#menu-cta-hide').should('be.visible')
})

When('I click the Book a Demo link', () => {
    cy.get('#menu-cta-hide').click()
})

Then('a modal dialogue is displayed', () => {
    cy.get('.belch-modal__container').should('be.visible')
})

Then('I enter my first name', () => {
    cy.get('input[placeholder="First name"].hs-input').first().type('Peter')
})

Then('I enter my last name', () => {
    cy.get('input[name="lastname"]').first().type('Harris')
})
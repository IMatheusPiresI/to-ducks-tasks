/// <reference types="cypress" />
import 'cypress-file-upload'
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('createTask', (title, desc, filePath) => {
  cy.get("input[placeholder='Duck Name']").type('My Task')
  cy.get('[data-testid="desc-task"]').type('My Desc')
  cy.get('input[type="file"]').attachFile('duck.svg')
  cy.get("button[type='Submit']").click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      createTask(name: string, desc: string, filePath: string): Chainable<void>
    }
  }
}

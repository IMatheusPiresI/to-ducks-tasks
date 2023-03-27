describe('Exclude Task', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.createTask('My title', 'My desc', 'duck.svg')
  })

  it('should be exclude task', () => {
    cy.get("[data-testid='delete']").click()
  })
})

describe('Edit Task', () => {
  it('should be open modal edit', () => {
    cy.visit('/')
    cy.createTask('Create Task', 'My Desc Created', 'duck.svg')

    cy.get('[data-testid="edit"]').click()
  })

  it('should be edit input task fields', () => {
    cy.visit('/')
    cy.createTask('Create Task', 'My Desc Created', 'duck.svg')

    cy.get('[data-testid="edit"]').click()
    const inputTitle = cy.get("[data-testid='inputTitleEdit']")
    const inputDesc = cy.get('[data-testid="inputDescEdit"]')

    inputTitle.clear()
    inputDesc.clear()
    inputTitle.type('My edit')
    inputDesc.type('My edited desc')

    cy.get("[data-testid='submitEdit']").click()
  })
})

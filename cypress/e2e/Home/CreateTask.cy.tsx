describe('Create Task', () => {
  it('should be create task with name, desc and file image', () => {
    cy.visit(`/`)
    cy.get("input[placeholder='Duck Name']").type('My Task')
    cy.get('[data-testid="desc-task"]').type('My Desc')
    cy.get('input[type="file"]').attachFile('duck.svg')
    cy.get("button[type='Submit']").click()
  })
})

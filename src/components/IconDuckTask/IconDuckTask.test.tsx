import { render, screen } from '@testing-library/react'
import IconDuckTask from '.'

describe('IconDuckTask Tests', () => {
  it('should be render edit icon on type button equal edit', () => {
    render(<IconDuckTask typeButton='edit' />)

    const editIcon = screen.getByTestId('edit')

    expect(editIcon).toBeInTheDocument()
  })

  it('should be render delete icon on type button equal delete', () => {
    render(<IconDuckTask typeButton='delete' />)

    const deleteIcon = screen.getByTestId('delete')

    expect(deleteIcon).toBeInTheDocument()
  })
})

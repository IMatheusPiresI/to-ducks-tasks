import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DescTask from '.'

describe('Desctask', () => {
  it('should be render desc task textarea successfull', () => {
    render(<DescTask />)

    const textAreaDesctask = screen.getByRole('textbox')
    expect(textAreaDesctask).toBeVisible()
  })

  it('should be write on textArea and check value', async () => {
    render(<DescTask />)

    const textAreaDesctask = screen.getByRole('textbox')

    await userEvent.clear(textAreaDesctask)
    await userEvent.type(textAreaDesctask, 'My desc task')
    expect(textAreaDesctask).toHaveValue('My desc task')
  })
})

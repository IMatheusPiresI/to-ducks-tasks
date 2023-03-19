import { render, screen } from '@testing-library/react'
import FormInput from '.'

describe('FormInput Tests', () => {
  it('should be render input successfull', () => {
    render(<FormInput />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})

import { screen, render, getByAltText } from '@testing-library/react'
import SearchInput from '.'

describe('SearchInput Tests', () => {
  it('should be render input text and image search', () => {
    render(<SearchInput />)

    const inputSearch = screen.getByPlaceholderText('Search for duck task')
    const imageSearch = screen.getByAltText('Search')

    expect(inputSearch).toBeInTheDocument()
    expect(imageSearch).toBeVisible()
  })
})

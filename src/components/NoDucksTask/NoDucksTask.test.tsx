import { screen, render } from '@testing-library/react'
import NoDucksTask from '.'

describe('NoDucksTask Tests', () => {
  it('should be render title empty component', () => {
    render(<NoDucksTask />)

    const titleEmpty = screen.getByText('No duck task added...')
    expect(titleEmpty).toBeVisible()
  })

  it('should be render image empty component by assets', () => {
    render(<NoDucksTask />)

    const imageEmpty = screen.getByAltText('empty duck')

    expect(imageEmpty).toHaveAttribute('src', 'test-file-stub')
  })
})

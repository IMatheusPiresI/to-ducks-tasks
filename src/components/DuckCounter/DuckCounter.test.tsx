import { render, screen } from '@testing-library/react'
import DuckCounter from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

describe('DuckCounter Tests', () => {
  it('should be render image duck', () => {
    renderProvider(<DuckCounter />)

    const imgDuck = screen.getByAltText('duck')
    expect(imgDuck).toBeVisible()
  })

  it('should be render count starts in 0', () => {
    renderProvider(<DuckCounter />)

    const counter = screen.getByText('0')
    expect(counter).toHaveTextContent('0')
  })
})

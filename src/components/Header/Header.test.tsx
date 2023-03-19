import { screen } from '@testing-library/react'
import Header from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

describe('Header Tests', () => {
  it('should be render heading', () => {
    renderProvider(<Header />)

    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()
  })

  it('should be render logo', () => {
    renderProvider(<Header />)

    const imgLogo = screen.getByAltText(/redux logo/i)
    const titleLogo = screen.getByText(/tducks/i)
    expect(imgLogo).toBeVisible()
    expect(titleLogo).toBeVisible()
  })

  it('should be render duck counter', () => {
    renderProvider(<Header />)

    const imgDuckCount = screen.getByAltText('duck')
    const count = screen.getByText('0')
    expect(imgDuckCount).toBeVisible()
    expect(count).toHaveTextContent('0')
  })
})

import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('Logo Tests', () => {
  it('should be render image logo successfull', () => {
    render(<Logo />)

    const imageLogo = screen.getByAltText(/redux logo/i)

    expect(imageLogo).toBeVisible()
  })

  it('should be show title logo', () => {
    render(<Logo />)

    const titleLogo = screen.getByText(/tducks/i)

    expect(titleLogo).toBeVisible()
  })
})

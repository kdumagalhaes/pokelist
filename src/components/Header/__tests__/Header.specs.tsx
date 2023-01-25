import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the star icon', () => {
    render(<Header />)
    const starIcon = screen.getByAltText(/fav pokémon/i)
    expect(starIcon).toBeVisible()
  })

  it('should render the logo image', () => {
    render(<Header />)
    const logo = screen.getByAltText(/logo pokelist/i)
    expect(logo).toBeVisible()
  })

  it('should render favorite text link', () => {
    render(<Header />)
    const favoriteText = /my fav pokémon/i
    expect(screen.getByText(favoriteText)).toBeInTheDocument()
  })

  it('should navigate to favorites page', () => {
    render(<Header />)
    const path = '/favorites'
    const linkText = /my fav pokémons/i
    expect(screen.getByText(linkText)).toHaveAttribute('href', path)
  })
})
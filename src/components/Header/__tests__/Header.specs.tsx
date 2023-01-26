import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../Header'

describe('Header', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the star icon', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const starIcon = screen.getByAltText(/fav pokémon/i)
    expect(starIcon).toBeVisible()
  })

  it('should render the logo image', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const logo = screen.getByAltText(/logo pokelist/i)
    expect(logo).toBeVisible()
  })

  it('should render favorite text link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const favoriteText = /my favorite pokémon/i
    expect(screen.getByText(favoriteText)).toBeInTheDocument()
  })

  it('should navigate to favorites page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const path = '/favorites'
    const linkText = /my favorite pokémons/i
    expect(screen.getByText(linkText)).toHaveAttribute('href', path)
  })
})

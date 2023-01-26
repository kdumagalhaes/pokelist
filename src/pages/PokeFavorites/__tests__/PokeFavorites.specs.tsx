import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PokeFavorites } from '../PokeFavorites'
import { PokeProvider } from '../../../context/PokeContext'

describe('PokeFavorites', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <PokeProvider>
          <PokeFavorites />
        </PokeProvider>
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render pikachu picture', () => {
    render(
      <BrowserRouter>
        <PokeProvider>
          <PokeFavorites />
        </PokeProvider>
      </BrowserRouter>,
    )
    const image = screen.getByAltText('sad pikachu')
    expect(image).toBeInTheDocument()
  })

  it('should render the message', () => {
    render(
      <BrowserRouter>
        <PokeProvider>
          <PokeFavorites />
        </PokeProvider>
      </BrowserRouter>,
    )
    const message = screen.getByText(`You don't have any favorite Pokémon yet!`)
    expect(message).toBeInTheDocument()
  })

  it('should render the button', () => {
    render(
      <BrowserRouter>
        <PokeProvider>
          <PokeFavorites />
        </PokeProvider>
      </BrowserRouter>,
    )
    const message = screen.getByText(`Catch 'em all!`)
    expect(message).toBeInTheDocument()
  })
})

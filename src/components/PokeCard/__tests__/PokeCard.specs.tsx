import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PokeCard } from '../PokeCard'

describe('PokeCard', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <PokeCard name={''} image={''} />
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render pokémon picture', async () => {
    await render(
      <BrowserRouter>
        <PokeCard
          name={'pikachu'}
          image={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          }
        />
      </BrowserRouter>,
    )
    const image = screen.getByAltText('pikachu')
    const url =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    expect(image).toHaveAttribute('src', url)
  })

  it('should render pokémon name', () => {
    render(
      <BrowserRouter>
        <PokeCard name={'Pikachu'} image={''} />
      </BrowserRouter>,
    )
    const pokemonName = /pikachu/i
    expect(screen.getByText(pokemonName)).toBeInTheDocument()
  })

  it('should navigate to pokémon details page', () => {
    render(
      <BrowserRouter>
        <PokeCard name={''} image={''} />
      </BrowserRouter>,
    )
    const path = '/pokemon/'
    expect(screen.getByRole('link')).toHaveAttribute('href', path)
  })
})

import { pokemons } from '../../mocks/pokemons'
import { PokeCard } from '../PokeCard/PokeCard'
import { Container } from './styles'

export function PokeContainer() {
  return (
    <Container>
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
          />
        )
      })}
    </Container>
  )
}

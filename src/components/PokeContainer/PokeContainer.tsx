import { usePokemon } from '../../context/PokeContext'
import { PokeCard } from '../PokeCard/PokeCard'
import { Container } from './styles'

export function PokeContainer() {
  const { apiResponse, getPokePicture } = usePokemon()
  apiResponse.forEach((res) => console.log(res.url))
  return (
    <Container>
      {apiResponse.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            image={getPokePicture(pokemon.url.slice(34, -1))}
          />
        )
      })}
    </Container>
  )
}

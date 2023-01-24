import { usePokemon } from '../../context/PokeContext'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { Container, Grid } from './styles'

export function PokeFavorites() {
  const { favoritesList, getPokePicture } = usePokemon()
  return (
    <Container>
      <Grid>
        {favoritesList.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              image={getPokePicture(pokemon.id.toString())}
            />
          )
        })}
      </Grid>
    </Container>
  )
}

import { usePokemon } from '../../context/PokeContext'
import { Pagination } from '../Pagination/Pagination'
import { PokeCard } from '../PokeCard/PokeCard'
import { Container, Grid } from './styles'

export function PokeContainer() {
  const { apiResponse, getPokePicture } = usePokemon()
  return (
    <Container>
      <Grid>
        {apiResponse.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              image={getPokePicture(pokemon.url.slice(34, -1))}
            />
          )
        })}
      </Grid>
      <Pagination />
    </Container>
  )
}

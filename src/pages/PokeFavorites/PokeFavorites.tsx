/* eslint-disable react/no-unescaped-entities */
import { usePokemon } from '../../context/PokeContext'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { Container, EmptyListMessage, Grid } from './styles'
import SadPikachu from '../../assets/images/sad-pikachu.webp'

export function PokeFavorites() {
  const { favoritesList, getPokePicture } = usePokemon()

  return (
    <Container>
      {!favoritesList.length ? (
        <EmptyListMessage>
          <img src={SadPikachu} alt="sad pikachu" className="sad-pikachu" />
          <p className="message">You don't have any favorite Pokémons yet!</p>
          <a href="/" className="catch-pokemon-link">
            Catch 'em all!
          </a>
        </EmptyListMessage>
      ) : (
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
      )}
    </Container>
  )
}

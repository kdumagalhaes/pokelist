/* eslint-disable camelcase */
import { Container, Wrapper } from './styles'
import StarIcon from '../../assets/icons/star-pokemon.webp'
import { useLocation, useNavigate } from 'react-router-dom'
import { getPokemonDetails } from '../../utils/getPokemonDetails/getPokemonDetails'
import { useEffect, useMemo, useState } from 'react'
import { usePokemon } from '../../context/PokeContext'

interface PokemonDetailsMode {
  id: number
  name: string
  base_experience: number
  types: [{ type: { name: string } }]
  abilities: [{ ability: { name: string } }]
  height: number
  weight: number
  species: {
    name: string
  }
}

export function PokeDetailPage() {
  const { pathname } = useLocation()
  const { getPokeFavorites, handleRemoveFavoritePokemon, pokemonIsFavorite } =
    usePokemon()

  const [pokemonDetails, setPokemonDetails] = useState({} as PokemonDetailsMode)
  const [favButtonActive, setFavButtonActive] = useState(false)

  const navigate = useNavigate()

  const {
    id,
    name,
    types,
    abilities,
    height,
    weight,
    species,
    base_experience,
  } = pokemonDetails

  const favoritePokemon = useMemo(() => ({ id, name }), [id, name])

  const handleFavoriteButtonClick = () => {
    getPokeFavorites(favoritePokemon)
    setFavButtonActive(true)
    if (pokemonIsFavorite(favoritePokemon)) {
      handleRemoveFavoritePokemon(favoritePokemon)
      setFavButtonActive(false)
    }
  }

  // retrieve data from the api, with the path in the endpoint when the page is load or the pathname variable changes
  // trigger the function pokemonIsFavorite in order to check if the pokemon is in the favorites list
  useEffect(() => {
    getPokemonDetails(pathname).then((pokeData) => {
      setPokemonDetails(pokeData)
    })
    if (pokemonIsFavorite(favoritePokemon)) {
      return setFavButtonActive(true)
    }
    setFavButtonActive(false)
  }, [pathname, favoritePokemon, getPokeFavorites, pokemonIsFavorite, navigate])

  return (
    <Wrapper>
      <Container>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          className="pokemon-pitcure"
        />
        <div className="content">
          <div className="top-content">
            <h3 className="pokemon-name">{name}</h3>
            <button className="fav-btn" onClick={handleFavoriteButtonClick}>
              <img
                src={StarIcon}
                alt="favorite icon"
                className={favButtonActive ? 'fav-icon' : 'inactive fav-icon'}
              />
            </button>
          </div>
          <div className="pokemon-base-experience">
            <span className="base-experience title">Base experience: </span>
            <span className="base-experience-value">{base_experience}</span>
          </div>
          <ul className="list pokemon-type">
            <span className="type title">Type: </span>
            {types &&
              types.map((data, index) => {
                return <li key={index}>{data.type.name}</li>
              })}
          </ul>
          <ul className="list pokemon-abilities">
            <span className="abilities title">Abilities:</span>
            {abilities &&
              abilities.map((data, index) => {
                return <li key={index}>{data.ability.name}</li>
              })}
          </ul>
          <div className="pokemon-height">
            <span className="height title">Height: </span>
            <span className="height-value">{height}</span>
          </div>
          <div className="pokemon-weight">
            <span className="weight title">Weight: </span>
            <span className="weight-value">{weight}</span>
          </div>
          <div className="pokemon-species">
            <span className="species title">Species: </span>
            <span className="species-value">{species && species.name}</span>
          </div>
        </div>
      </Container>
      <button onClick={() => navigate(-1)} className="back-btn">
        Go back!
      </button>
    </Wrapper>
  )
}

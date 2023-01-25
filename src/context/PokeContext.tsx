import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

interface Pokemon {
  id: number
  name: string
  url: string
}

interface PokeProviderProps {
  children: ReactNode
}

interface FavoritePokemon {
  id: number
  name: string
}
interface PokeContextModel {
  apiResponse: Pokemon[]
  getPokePicture: (id: string | number) => string
  nextPageUrl: string
  prevPageUrl: string
  goToNextPage: () => void
  goToPrevPage: () => void
  getPokeFavorites: (favoritePokemon: FavoritePokemon) => void
  favoritesList: FavoritePokemon[]
  handleRemoveFavoritePokemon: (pokemonToRemove: FavoritePokemon) => void
  pokemonIsFavorite: (favoritePokemon: FavoritePokemon) => boolean
}

export const PokeContext = createContext({} as PokeContextModel)

export const PokeProvider = ({ children }: PokeProviderProps) => {
  const [apiResponse, setApiResponse] = useState<Pokemon[]>([])
  const [favoritesList, setFavoritesList] = useState<FavoritePokemon[]>([])
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  )
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [prevPageUrl, setPrevPageUrl] = useState('')

  // retrieve the basic pokemon data in the general list and pagination url
  useEffect(() => {
    fetch(currentPage)
      .then((res) => res.json())
      .then((json) => {
        setApiResponse(json.results)
        setNextPageUrl(json.next)
        setPrevPageUrl(json.previous)
      })
  }, [currentPage])

  // retrieve the favorites list from localStorage and insert the data into a new list
  useEffect(() => {
    const favoritesValue = localStorage.getItem('pokefavs')
    if (typeof favoritesValue === 'string') {
      const favorites = JSON.parse(favoritesValue)
      setFavoritesList(favorites)
    }
  }, [])

  const goToNextPage = () => {
    setCurrentPage(nextPageUrl)
  }

  const goToPrevPage = () => {
    setCurrentPage(prevPageUrl)
  }

  // retrieve id and name of the pokemon that the user has clicked on the fav button and save the data in localStorage
  const getPokeFavorites = (favoritePokemon: FavoritePokemon) => {
    // if favoritesList doesn't have a pokemon with the same id as favoritePokemon, include it in the list
    if (!favoritesList.find((pokemon) => pokemon.id === favoritePokemon.id)) {
      localStorage.setItem(
        'pokefavs',
        JSON.stringify([...favoritesList, favoritePokemon]),
      )
    }
  }

  // check if the pokemon is in the favorites list
  const pokemonIsFavorite = (pokemon: FavoritePokemon) => {
    const isFavorite = favoritesList.some((item) =>
      Object.keys(item).some(
        (key) =>
          item[key as keyof FavoritePokemon] ===
          pokemon[key as keyof FavoritePokemon],
      ),
    )
    return isFavorite
  }

  // check if the pokemon is in the favorites list, if it is, create a new array without the duplicated pokémon
  const handleRemoveFavoritePokemon = (
    pokemonToRemove: FavoritePokemon,
  ): void => {
    const favoriteListWithoutRemovedOne = favoritesList.filter(
      (pokemon: FavoritePokemon) => {
        return pokemon.id !== pokemonToRemove.id
      },
    )

    localStorage.setItem(
      'pokefavs',
      JSON.stringify(favoriteListWithoutRemovedOne),
    )
  }

  // retrieve the pokemon picture based on its id, which is presented in the general pokemon list
  const getPokePicture = useCallback((id: string | number) => {
    const pokeId = typeof id === 'number' ? id.toString() : id
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
  }, [])

  const value = {
    apiResponse,
    getPokePicture,
    nextPageUrl,
    prevPageUrl,
    goToNextPage,
    goToPrevPage,
    getPokeFavorites,
    favoritesList,
    handleRemoveFavoritePokemon,
    pokemonIsFavorite,
  }

  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}

export const usePokemon = () => {
  const context = useContext(PokeContext)

  if (context === undefined) {
    throw new Error('usePokemon must be used within PokeContext')
  }

  return context
}

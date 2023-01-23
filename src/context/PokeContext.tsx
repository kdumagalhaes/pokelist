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

interface PokeContextModel {
  apiResponse: Pokemon[]
  getPokePicture: (id: string) => string
  nextPageUrl: string
  prevPageUrl: string
  goToNextPage: () => void
  goToPrevPage: () => void
}

export const PokeContext = createContext({} as PokeContextModel)

export const PokeProvider = ({ children }: PokeProviderProps) => {
  const [apiResponse, setApiResponse] = useState<Pokemon[]>([])
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

  const goToNextPage = () => {
    setCurrentPage(nextPageUrl)
  }

  const goToPrevPage = () => {
    setCurrentPage(prevPageUrl)
  }

  // retrieve the pokemon picture based on its id, which is presented in the general pokemon list
  const getPokePicture = useCallback((id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }, [])

  const value = {
    apiResponse,
    getPokePicture,
    nextPageUrl,
    prevPageUrl,
    goToNextPage,
    goToPrevPage,
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

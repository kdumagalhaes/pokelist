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
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

interface PokeProviderProps {
  children: ReactNode
}

interface PokeContextModel {
  apiResponse: Pokemon[]
  getPokePicture: (id: string) => string
}

export const PokeContext = createContext({} as PokeContextModel)

export const PokeProvider = ({ children }: PokeProviderProps) => {
  const [apiResponse, setApiResponse] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((r) => r.json())
      .then((json) => {
        setApiResponse(json.results)
      })
  }, [])

  const getPokePicture = useCallback((id: string) => {
    console.log(id)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }, [])

  const value = {
    apiResponse,
    getPokePicture,
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

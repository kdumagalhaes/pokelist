import { getPokemonDetails } from '../getPokemonDetails'

describe('pokemonDetails', () => {
  it('should retrieve api data based on path name entry', async () => {
    const mockedPokemon = {
      name: 'pikachu',
    }

    const apiResult = await getPokemonDetails('/pokemon/pikachu')

    expect(apiResult).toEqual(expect.objectContaining(mockedPokemon))
  })
})

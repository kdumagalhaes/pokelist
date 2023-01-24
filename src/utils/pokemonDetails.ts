// retrieve api data based on different endpoints
export const getPokemonDetails = (pathName: string) => {
  return fetch(`https://pokeapi.co/api/v2${pathName}`).then((res) => res.json())
}

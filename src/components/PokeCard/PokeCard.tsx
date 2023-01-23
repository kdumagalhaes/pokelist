import { Container } from './styles'

interface PokeCardProps {
  name: string
  image: string
}

export function PokeCard({ name, image }: PokeCardProps) {
  // capitalize the first letter of the pokemon's name
  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  return (
    <Container>
      <img className="pokemon-image" src={image} alt={name} />
      <h2 className="pokemon-name">{capitalizeFirstLetter(name)}</h2>
    </Container>
  )
}

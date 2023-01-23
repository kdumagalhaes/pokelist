import { Container } from './styles'

interface PokeCardProps {
  name: string
  image: string
}

export function PokeCard({ name, image }: PokeCardProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </Container>
  )
}

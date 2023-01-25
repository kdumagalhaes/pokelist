import { Container } from './styles'
import { NavLink } from 'react-router-dom'
interface PokeCardProps {
  name: string
  image: string
}

export function PokeCard({ name, image }: PokeCardProps) {
  return (
    <Container>
      <NavLink className="pokemon-link" to={{ pathname: `/pokemon/${name}` }}>
        <img className="pokemon-image" src={image} alt={name} />
        <h2 className="pokemon-name">{name}</h2>
      </NavLink>
    </Container>
  )
}

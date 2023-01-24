import { Container } from './styles'
import { NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
interface PokeCardProps {
  name: string
  image: string
}

export function PokeCard({ name, image }: PokeCardProps) {
  return (
    <Container>
      <NavLink className="pokemon-link" to={{ pathname: `/pokemon/${name}` }}>
        <img className="pokemon-image" src={image} alt={name} />
        <h2 className="pokemon-name">{capitalizeFirstLetter(name)}</h2>
      </NavLink>
    </Container>
  )
}

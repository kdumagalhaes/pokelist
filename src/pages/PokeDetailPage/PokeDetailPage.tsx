import { Container } from './styles'
import StarIcon from '../../assets/icons/star-pokemon.webp'

export function PokeDetailPage() {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt=""
        className="pokemon-pitcure"
      />
      <div className="content">
        <div className="top-content">
          <h3 className="pokemon-name">Bulbasaur</h3>
          <button className="fav-btn">
            <img src={StarIcon} alt="favorite icon" className="fav-icon" />
          </button>
        </div>
        <p className="pokemon-bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          laborum? Aspernatur sint iste nesciunt! Distinctio esse adipisci id
          minima enim.
        </p>
        <div className="pokemon-type">
          <span className="type title">Type: </span>
          <span className="type-value">Plant </span>
        </div>
        <ul className="pokemon-abilities">
          <span className="abilities title">Abilities:</span>
          <li>ability 1</li>
          <li>ability 2</li>
        </ul>
        <div className="pokemon-height">
          <span className="height title">Height: </span>
          <span className="height-value">2 m (78.7 in)</span>
        </div>
        <div className="pokemon-weight">
          <span className="weight title">Weight: </span>
          <span className="weight-value">100 kg (220.5 lbs)</span>
        </div>
        <div className="pokemon-species">
          <span className="species title">Species: </span>
          <span className="species-value">Bulbasaur </span>
        </div>
      </div>
    </Container>
  )
}

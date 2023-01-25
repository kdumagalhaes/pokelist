import { Wrapper } from './styles'
import LogoImg from '../../assets/images/logo.svg'
import StarIcon from '../../assets/icons/star-pokemon.webp'

export function Header() {
  return (
    <Wrapper>
      <div className="container">
        <a href="/">
          <h1>logo poketlist</h1>
          <img src={LogoImg} alt="logo pokelist" className="logo" />
        </a>
      </div>

      <nav className="menu">
        <a href="/favorites" className="favorites-page-link">
          <img src={StarIcon} alt="fav pokémon" className="star-icon" />
          My fav Pokémons!
        </a>
      </nav>
    </Wrapper>
  )
}

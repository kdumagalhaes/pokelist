import { Wrapper } from './styles'
import LogoImg from '../../assets/images/logo.svg'
import StarIcon from '../../assets/icons/star-pokemon.webp'
import { useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()

  return (
    <Wrapper>
      <div className="container">
        <a href="/">
          <h1>logo poketlist</h1>
          <img src={LogoImg} alt="logo pokelist" className="logo" />
        </a>
      </div>

      <nav className="menu">
        {pathname === '/favorites' ? (
          <a href="/" className="favorites-page-link">
            Back to home!
          </a>
        ) : (
          <a href="/favorites" className="favorites-page-link">
            <img src={StarIcon} alt="fav pokémon" className="star-icon" />
            My favorite Pokémons!
          </a>
        )}
      </nav>
    </Wrapper>
  )
}

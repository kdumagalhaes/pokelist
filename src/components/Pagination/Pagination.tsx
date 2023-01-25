import { Container } from './styles'
import LeftArrowIcon from '../../assets/icons/circle-left.svg'
import RightArrowIcon from '../../assets/icons/circle-right.svg'
import { usePokemon } from '../../context/PokeContext'

export function Pagination() {
  const { goToNextPage, goToPrevPage, prevPageUrl } = usePokemon()
  return (
    <Container>
      {/* if the user is on the first page, hide the previous button */}
      {prevPageUrl !== null ? (
        <button onClick={goToPrevPage} className="pagination-btn">
          <img
            className="pagination-icon"
            src={LeftArrowIcon}
            alt="left arrow"
          />
          Previous
        </button>
      ) : (
        ''
      )}
      <button onClick={goToNextPage} className="pagination-btn">
        <img
          className="pagination-icon"
          src={RightArrowIcon}
          alt="right arrow"
        />
        Next
      </button>
    </Container>
  )
}

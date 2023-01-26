import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  margin: 3rem auto 15rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  cursor: pointer;
  margin-bottom: 6rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
`

export const EmptyListMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .sad-pikachu {
    width: 150px;
    height: 150px;
  }

  .message {
    max-width: 15rem;
    text-align: center;
    color: ${({ theme }) => theme.red};
    font-weight: 700;
    font-size: 1.2rem;
  }

  .catch-pokemon-link {
    background-color: ${({ theme }) => theme.blue};
    padding: 1rem 4rem;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    color: ${({ theme }) => theme.yellow};
    transition: background-color 0.3s;
    margin-top: 2rem;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.darkestBlue};
    }
  }
`

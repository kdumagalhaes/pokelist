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
  padding: 0 1rem;
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

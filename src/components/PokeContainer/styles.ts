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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  cursor: pointer;
  margin-bottom: 6rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
`

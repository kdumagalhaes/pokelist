import styled from 'styled-components'

export const Container = styled.div`
  .pokemon-link {
    height: 265px;
    width: 100%;
    max-width: 200px;
    outline: transparent;
    border-radius: 5px;
    transition: outline 0.3s;
    padding: 2rem;
    max-width: 26rem;
    text-decoration: none;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    transition: box-shadow 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .pokemon-image {
      width: 180px;
      height: 180px;
    }

    .pokemon-name {
      color: ${({ theme }) => theme.darkestBlue};
      text-transform: capitalize;
    }
  }
`
